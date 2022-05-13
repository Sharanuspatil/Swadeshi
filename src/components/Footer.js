import React, { Component } from "react";
import "../components/css/Footer.css";
export class Footer extends Component {
  render() {
    return (
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="footer-pad">
                  <h4>About us</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique numquam, sunt, dolore repudiandae voluptatum
                    delectus error dignissimos ab corrupti quas rerum impedit ad
                    distinctio cum fuga consectetur inventore voluptatibus
                    officiis?
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="footer-pad">
                  <h4>Links</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href=" ">Community</a>
                    </li>
                    <li>
                      <a href=" ">Services</a>
                    </li>
                    <li>
                      <a href=" ">Auction</a>
                    </li>
                    <li>
                      <a href=" ">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="https://www.facebook.com/urverdurepvt"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/urverdurepvtltd"
                      className="icoLinkedin"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/urverdure"
                      className="icoTwitter"
                      title="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/urverdure/"
                      className="icoInstagram"
                      title="Instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2021 - Chaitanya. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
