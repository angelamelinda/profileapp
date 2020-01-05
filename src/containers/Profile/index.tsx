import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import HighlightsPanel from "../../components/HighlightsPanel";
import NotificationPanel from "../../components/NotificationPanel";

class Profile extends PureComponent<{}> {
  state = {
    notificationIsActive: true,
    notificationIsComing: false,
    notificationIsLeaving: false
  };

  componentDidMount() {
    this.setState(
      {
        notificationIsComing: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            notificationIsComing: false
          });
        }, 1000);
      }
    );
  }

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

  render() {
    const {
      notificationIsActive,
      notificationIsComing,
      notificationIsLeaving
    } = this.state;
    return (
      <>
        <NotificationPanel
          isComing={notificationIsComing}
          isLeaving={notificationIsLeaving}
          isActive={notificationIsActive}
          handleClickNotification={this.handleClickNotification}
        />
        <Header />
        <Hero />
        <HighlightsPanel />
        <Footer />
      </>
    );
  }
}

export default Profile;
