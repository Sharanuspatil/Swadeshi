import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Home from "./section/Home";
import App from "../auction/src/AuctionRoute";
import education from "../Education/src/App";
import blog from "../blogging/src/App";
import LoginForm from "../Login/src/App";
import SinglePost from "../blogging/src/components/singlePost/SinglePost";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/Blog" component={blog} exact />
        <Route path="/Education" component={education} exact />
        <Route path="/Auction" component={App} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/Contact" component={LoginForm} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/payment" component={Payment} exact />
        <Route path="/posts/:i" component={SinglePost} exact />
      </section>
    );
  }
}

export default Section;
