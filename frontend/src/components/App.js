import React, { Component } from "react";
import CertificateForm from "./certificateForm"; // Import the CertificateForm component
import { render } from "react-dom";
import "../../static/css/index.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import CertificateValidationForm from "./validationCard";
import Home from "./home";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-container">
        <Navbar id="navbar" />
        <div className="content">
          <Home id="home" />
          <CertificateForm id="createCertificate"/>
          <CertificateValidationForm id="validateCertificate"/>
        </div>
        <Footer id="contact"/>
        </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);