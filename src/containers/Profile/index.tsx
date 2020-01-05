import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import HighlightsPanel from "../../components/HighlightsPanel";
import NotificationPanel from "../../components/NotificationPanel";

class Profile extends PureComponent<{}> {
  state = {
    notificationIsActive: true,
    notificationIsLeaving: false
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

  render() {
    const { notificationIsActive, notificationIsLeaving } = this.state;
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
        <Footer />
      </>
    );
  }
}

export default Profile;
