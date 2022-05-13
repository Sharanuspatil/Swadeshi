import React, { Component } from "react";
import "../css/Home.css";
import "../css/Products.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { DataContext } from "../Context";
export class Home extends Component {
  static contextType = DataContext;
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    const { products, addCart } = this.context;
    return (
      <>
        <section className="home" id="home">
          <div className="max-width">
            <div className="row">
              <div className="home-content">
                <div className="text-2">Chaitanya</div>
                <div className="text-3">
                  Grameena Krishna Unnati Ke Taraf Ek Kadam
                </div>
                <a href=" ">About us</a>
              </div>
            </div>
          </div>
        </section>

        <div
          className="w3-container  about"
          style={{ padding: "130px 16px" }}
          data-aos="fade-up"
        >
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>One Stop Ecommerce for Villagers.</h3>
              <p>
                We as a team found the various problems faced by the rural
                producers in these difficult times and wanted to help them. So,
                we thought of creating a platform specifically designed and
                developed for their use. Main objective of this project is to
                provide a sustainable market and income to the local communities
                using their own indigenous skills, strengths and creativity
                aiming at the Indian market . Swadeshi aims at reducing the
                costs incurred for the betterment of their revenue. Automating
                the ecommerce business can help in reducing the management cost
                significantly. Moreover, the right use of digital marketing can
                help in reducing the cost spent on driving customers to such an
                extent that businesses can bring customers for free of cost.
              </p>
              <p>
                <a href="#work" className="w3-button w3-black">
                  About us
                </a>
              </p>
            </div>
            <div className="w3-col m6">
              <img
                className="w3-image w3-round-large"
                src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=600"
                alt="Buildings"
                width="900"
              />
            </div>
          </div>
        </div>

        <div className="choose">
          <div className="section-title">
            <h2>Government Schemes</h2>
            <p>Some of the government schemes</p>
          </div>

          <div className="feat bg-gray pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="item">
                    {" "}
                    <span className="icon feature_box">
                      <i className="fa fa-building"></i>
                    </span>
                    <h6>National Mission For Sustainable Agriculture (NMSA)</h6>
                    <p>
                      National Mission for Sustainable Agriculture (NMSA) has
                      been formulated for enhancing agricultural productivity
                      especially in rainfed areas focusing on integrated
                      farming, water use efficiency, soil health management and
                      synergizing resource conservation.
                    </p>
                    <button className="btn2">
                      <a
                        href="https://nmsa.dac.gov.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Go To
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="item">
                    {" "}
                    <span className="icon feature_box">
                      <i className="fa fa-building"></i>
                    </span>
                    <h6>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</h6>
                    <p>
                      Government of India is committed to accord high priority
                      to water conservation and its management. To this effect
                      Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) has been
                      formulated with the vision of extending the coverage of
                      irrigation 'Har Khet ko pani' .
                    </p>
                    <button className="btn2">
                      <a
                        href="https://pmksy.gov.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Go To
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="item">
                    {" "}
                    <span className="icon feature_box">
                      <i className="fa fa-building"></i>
                    </span>
                    <h6>National Agriculture Market (eNAM)</h6>
                    <p>
                      It(eNAM) is a pan-India electronic trading portal which
                      networks the existing APMC mandis to create a unified
                      national market for agricultural commodities.Small Farmers
                      Agribusiness Consortium (SFAC) is the lead agency .
                    </p>
                    <button className="btn2">
                      <a href="/product"> Go To</a>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="item">
                    {" "}
                    <span className="icon feature_box">
                      <i className="fa fa-building"></i>
                    </span>
                    <h6>Paramparagat Krishi Vikas Yojana (PKVY)</h6>
                    <p>
                      The Paramparagat Krishi Vikas Yojana (PKVY), an initiative
                      to promote organic farming in the country, was launched by
                      the NDA government in 2015. According to the scheme,
                      farmers will be encouraged to form groups or clusters and
                      take to organic farming methods over large areas in the
                      country.
                    </p>
                    <button className="btn2">
                      <a
                        href="https://pgsindia-ncof.gov.in/PKVY/Introduction.aspx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Go To
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="item">
                    {" "}
                    <span className="icon feature_box">
                      <i className="fa fa-building"></i>
                    </span>
                    <h6>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h6>
                    <p>
                      Pradhan Mantri Fasal Bima Yojana (PMFBY) is the government
                      sponsored crop insurance scheme that integrates multiple
                      stakeholders on a single platform.To provide insurance
                      coverage and financial support to the farmers in the event
                      of failure of any of the notified crop as a result of
                      natural calamities, pests & diseases.
                    </p>
                    <button className="btn2">
                      <a href="/product"> Go To</a>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="item">
                    {" "}
                    <span className="icon feature_box">
                      <i className="fa fa-building"></i>
                    </span>
                    <h6>DEPARTMENT OF AGRICULTURE & FARMERS WELFARE</h6>
                    <p>
                      The DA&FW is organized into 28 Divisions and has five
                      attached offices and twenty-one subordinate offices for
                      coordinating with state level agencies and implementation
                      of Central Sector Schemes in their respective fields.
                      Further ten nationallevel cooperative organizations and
                      two authorities are functioning.
                    </p>
                    <button className="btn2">
                      <a
                        href="https://agricoop.nic.in/en/dacfw-organisation"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Go To
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w3-container tech" id="team">
          <div className="section-title">
            <h2> Our Services</h2>
          </div>
          <div className="teamcard ">
            <div className=" w3-margin-bottom">
              <div className="w3-card ">
                <img
                  src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/01/785054-ecommerce-istock-020119.jpg"
                  alt="Buildings"
                />
                <div className="w3-container ">
                  <h2 className="w3-center">Ecommerce</h2>
                  <h6>
                    The essence of handmade goods is the speciality of Swadeshi!
                    And you can get this essence home through our E-commerce
                    sites. Come get yours hand on our best products and grow
                    with us!
                  </h6>
                  <button className="btn1">
                    <a href="/product"> Go To</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="  w3-margin-bottom">
              <div className="w3-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_6-L1rTNe2v8bAuQS_kp8iR4rV2z78a64A&usqp=CAU"
                  alt="Buildings"
                />
                <div className="w3-container">
                  <h2 className="w3-center">Education</h2>

                  <h6>
                    Wanna Learn? Or Wanna Teach? Education is the stop for you .
                    Embroidery, pottery etc. Yes the villagers are talented! And
                    you can get this knowledge through our education page.
                  </h6>
                  <button className="btn1">
                    <a href="/Education"> Go To</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="  w3-margin-bottom">
              <div className="w3-card">
                <img
                  src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                  alt="Buildings"
                />
                <div className="w3-container">
                  <h2 className="w3-center">Blog </h2>

                  <h6>
                    Want to know more about the village? Our Blogging Page is
                    all you need! Lets us understand and feel the diverse
                    culture , tradition and beauty of villagers in India. Let's
                    embrace the skills possessed by the villagers.
                  </h6>
                  <button className="btn1">
                    <a href="/Blog"> Go To</a>
                  </button>
                </div>
              </div>
            </div>
            <div className=" w3-margin-bottom">
              <div className="w3-card">
                <img
                  src="https://img.etimg.com/thumb/msid-72137093,width-650,imgsize-439255,,resizemode-4,quality-100/online-auction-sales_istock.jpg"
                  alt="Buildings"
                />
                <div className="w3-container">
                  <h2 className="w3-center">Auction</h2>

                  <h6>
                    Let us Bid! Our Auction page is the place where you can get
                    your hands on the most beautiful and unique goods made by
                    our people! Let us promote the talent and work of our
                    country!
                  </h6>
                  <button className="btn1">
                    <a href="/Auction"> Go To</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="SEC">
          <div className="heading ">Our Testimonials</div>
          <div className="wrapper">
            <div className="container">
              <div className="profile">
                <div className="imgBox">
                  <img
                    src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                    alt=""
                  />
                </div>
                <h2>Shreyas Raj</h2>
              </div>
              <p>
                <span className="fa fa-quote-left left"></span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quam neque
                reiciendis sit. Incidunt tempore vitae aliquam alias voluptatem
                accusantium magnam eos harum ipsam modi, quisquam illo facilis
                suscipit maxime obcaecati laboriosam cum blanditiis ducimus ut
                consectetur id mollitia aperiam rerum.
                <span className="fa fa-quote-right right"></span>
              </p>
              <div className="social">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>

            <div className="container">
              <div className="profile">
                <div className="imgBox">
                  <img
                    src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                    alt=""
                  />
                </div>
                <h2>Bhumiii Shetty</h2>
              </div>
              <p>
                <span className="fa fa-quote-left left"></span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quam neque
                reiciendis sit. Incidunt tempore vitae aliquam alias voluptatem
                accusantium magnam eos harum ipsam modi, quisquam illo facilis
                suscipit maxime obcaecati laboriosam cum blanditiis ducimus ut
                consectetur id mollitia aperiam rerum.
                <span className="fa fa-quote-right right"></span>
              </p>
              <div className="social">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>

            <div className="container">
              <div className="profile">
                <div className="imgBox">
                  <img
                    src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                    alt=""
                  />
                </div>
                <h2>Varsha Bang</h2>
              </div>
              <p>
                <span className="fa fa-quote-left left"></span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quam neque
                reiciendis sit. Incidunt tempore vitae aliquam alias voluptatem
                accusantium magnam eos harum ipsam modi, quisquam illo facilis
                suscipit maxime obcaecati laboriosam cum blanditiis ducimus ut
                consectetur id mollitia aperiam rerum.
                <span className="fa fa-quote-right right"></span>
              </p>
              <div className="social">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
