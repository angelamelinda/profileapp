import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import HighlightsPanel from "../../components/HighlightsPanel";
import NotificationPanel from "../../components/NotificationPanel";
import NewsletterPanel from "../../components/NewsletterPanel";
import { NOTIFICATION_PANEL_TIMEOUT } from "../../constants";
import { setCookie, getCookie } from "../../helpers";

interface IProfileState {
  notificationIsActive: boolean;
  notificationIsLeaving: boolean;
  newsletterIsActive: boolean;
  newsletterIsLeaving: boolean;
  newsletterIsComing: boolean;
  documentHeight: number;
  isScrollAfterPoint: boolean;
}

interface IProfileProps {}

class Profile extends PureComponent<IProfileProps, IProfileState> {
  private interval: number = -1;

  constructor(props: IProfileProps) {
    super(props);
    this.state = {
      notificationIsActive: true,
      notificationIsLeaving: false,
      newsletterIsActive: false,
      newsletterIsLeaving: false,
      newsletterIsComing: false,
      documentHeight: window.innerHeight,
      isScrollAfterPoint: false
    };
  }

  componentDidMount() {
    this.handleScroll();
    this.timerInterval();
    this.checkNewsletterPanel();

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.interval);
  }

  componentDidUpdate(_: IProfileProps, prevState: IProfileState) {
    const resultGetCookie = getCookie("cermati-newsletter");

    if (
      prevState.isScrollAfterPoint !== this.state.isScrollAfterPoint &&
      this.state.isScrollAfterPoint &&
      !resultGetCookie
    ) {
      this.setState(
        {
          newsletterIsActive: true,
          newsletterIsComing: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              newsletterIsComing: false
            });
          }, 1000);
        }
      );
    } else if (
      prevState.isScrollAfterPoint !== this.state.isScrollAfterPoint &&
      !this.state.isScrollAfterPoint &&
      !resultGetCookie
    ) {
      this.setState(
        {
          newsletterIsLeaving: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              newsletterIsActive: false,
              newsletterIsLeaving: false
            });
          }, 1000);
        }
      );
    }
  }

  checkNewsletterPanel = () => {
    const resultGetCookie = getCookie("cermati-newsletter");

    if (
      !resultGetCookie &&
      this.state.isScrollAfterPoint &&
      !this.state.newsletterIsActive
    ) {
      this.setState(
        {
          newsletterIsActive: true,
          newsletterIsComing: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              newsletterIsComing: false
            });
          }, 1000);
        }
      );
    } else if (resultGetCookie) {
      this.setState({
        newsletterIsActive: false
      });
    }
  };

  timerInterval = () => {
    const resultGetCookie =
      getCookie("cermati-newsletter") || NOTIFICATION_PANEL_TIMEOUT;

    this.interval = setInterval(() => {
      this.checkNewsletterPanel();
    }, resultGetCookie);
  };

  handleScroll = () => {
    const positionY = (document.documentElement as any).scrollTop;
    if (positionY >= this.state.documentHeight * 0.33) {
      this.setState({
        isScrollAfterPoint: true
      });
    } else {
      this.setState({
        isScrollAfterPoint: false
      });
    }
  };

  handleResize = () => {
    this.setState({
      documentHeight:
        (document.documentElement as HTMLElement).offsetHeight || 0
    });
  };

  handleClickNotification = () => {
    this.setState(
      {
        notificationIsLeaving: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            notificationIsActive: false
          });
        }, 500);
        setTimeout(() => {
          this.setState({
            notificationIsLeaving: false
          });
        }, 1000);
      }
    );
  };

  handleCloseNewsletter = () => {
    this.setState(
      {
        newsletterIsLeaving: true
      },
      () => {
        setCookie(
          "cermati-newsletter",
          NOTIFICATION_PANEL_TIMEOUT,
          NOTIFICATION_PANEL_TIMEOUT
        );
        setTimeout(() => {
          this.setState({
            newsletterIsLeaving: false,
            newsletterIsActive: false
          });
        }, 1000);
        this.timerInterval();
      }
    );
  };

  render() {
    const {
      notificationIsActive,
      notificationIsLeaving,
      newsletterIsActive,
      newsletterIsLeaving,
      newsletterIsComing
    } = this.state;
    return (
      <>
        <NotificationPanel
          isLeaving={notificationIsLeaving}
          isActive={notificationIsActive}
          handleClickNotification={this.handleClickNotification}
        />
        <Header />
        <Hero />
        <HighlightsPanel />
        <NewsletterPanel
          isComing={newsletterIsComing}
          isLeaving={newsletterIsLeaving}
          isActive={newsletterIsActive}
          handleCloseNewsletter={this.handleCloseNewsletter}
        />
        <Footer />
      </>
    );
  }
}

export default Profile;
