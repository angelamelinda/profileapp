import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import HighlightsPanel from "../../components/HighlightsPanel";
import NotificationPanel from "../../components/NotificationPanel";
import NewsletterPanel from "../../components/NewsletterPanel";
import { NOTIFICATION_PANEL_TIMEOUT } from "../../constants";
import { setCookie, getCookie } from "../../helpers";

class Profile extends PureComponent<{}> {
  private interval: number = -1;

  state = {
    notificationIsActive: true,
    notificationIsLeaving: false,
    newsletterIsActive: false,
    newsletterIsLeaving: false,
    newsletterIsComing: false
  };

  componentDidMount() {
    this.timerInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  checkNewsletterPanel = () => {
    const resultGetCookie = getCookie("cermati-newsletter");
    if (!resultGetCookie) {
      clearInterval(this.interval);
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
    } else {
      this.setState({
        newsletterIsActive: false
      });
    }
  };

  timerInterval = () => {
    this.interval = setInterval(() => {
      this.checkNewsletterPanel();
    }, 1000);
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
        setCookie("cermati-newsletter", "hidden", NOTIFICATION_PANEL_TIMEOUT);
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
