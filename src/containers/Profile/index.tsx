import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

class Profile extends PureComponent<{}> {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default Profile;
