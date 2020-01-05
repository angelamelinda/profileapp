import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import HighlightsPanel from "../../components/HighlightsPanel";

class Profile extends PureComponent<{}> {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <HighlightsPanel />
        <Footer />
      </>
    );
  }
}

export default Profile;
