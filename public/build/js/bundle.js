import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>No Products In Cart</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors}/>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                       
                        <h2>Total: ${total}</h2>
                        <Link to="/payment">Payment</Link>
                    </div>
                </>
                )
            }
        }
}

export default Cart

import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div className="colors">
                {
                    colors.map((color,index) =>(
                        <button key={index} style={{background: color}}></button>
                    ))
                }
            </div>
        )
    }
}

export default Colors

import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details

import React, { Component } from "react";
import "../css/Home.css";
import "../css/Products.css";
import { Link } from "react-router-dom";

import { DataContext } from "../Context";
export class Home extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;
    return (
      <>
<section className="home" id="home">
      <div className="max-width">
          <div className="row">
            <div className="home-content">
                
                <div className="text-2">Swadeshi</div>
                <div className="text-3">One stop Ecommerce for  <span class="typing">Villagers.</span></div>
                <a href="#">About us</a>
            </div>
          </div>
      </div>
    </section>

 <div className="w3-container  about" style={{ padding: "130px 16px" }} >
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>One Stop Ecommerce for Villagers.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore.
              </p>
              <p>
                <a href="#work" className="w3-button w3-black">
                     About us 
                </a>
              </p>
            </div>
            <div className="w3-col m6">
              <img className="w3-image w3-round-large"  src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=600"  alt="Buildings"width="900"/>
            </div>
          </div>
        </div>


 <div className="hexagon-section">


          <div className="wrap">
            <ul className="title">
              <h1>
                <b>Why  Choose Us  </b>
              </h1>
            </ul>
            <div className="subtitle">
              <span>It Ensures</span>
            </div>
          </div>

          <section id="lab">
            <article>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}} >
                      <div className="overlay">
                        <h3 className="text">Requires Less Space</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://us.123rf.com/450wm/perekotypole/perekotypole1712/perekotypole171200069/92151688-spices-at-the-market-in-the-old-city-jerusalem-israel.jpg?ver=6")'}} >
                      <div className="overlay">
                        <h3 className="text">Villager Ecommerce</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://st4.depositphotos.com/3211229/26826/i/1600/depositphotos_268264070-stock-photo-villagers-took-bamboo-stripes-to.jpg")'}}>
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}}>
                      <div className="overlay">
                        <h3 className="text">Faster Growth</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://us.123rf.com/450wm/perekotypole/perekotypole1712/perekotypole171200069/92151688-spices-at-the-market-in-the-old-city-jerusalem-israel.jpg?ver=6")'}} >
                      <div className="overlay">
                        <h3 className="text">Villager Ecommerce</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}}>
                      <div className="overlay">
                        <h3 className="text">Faster Growth</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://st4.depositphotos.com/3211229/26826/i/1600/depositphotos_268264070-stock-photo-villagers-took-bamboo-stripes-to.jpg")'}} >
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}}>
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://us.123rf.com/450wm/perekotypole/perekotypole1712/perekotypole171200069/92151688-spices-at-the-market-in-the-old-city-jerusalem-israel.jpg?ver=6")'}} >
                      <div className="overlay">
                        <h3 className="text">Villager Ecommerce</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://st4.depositphotos.com/3211229/26826/i/1600/depositphotos_268264070-stock-photo-villagers-took-bamboo-stripes-to.jpg")'}} >
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}} >
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>


<h2 className ="w3-center w3-xxlarge"><b> Featured Products</b></h2> 



 <div id="product">

          {products.map((product) => (
            <div className="card" key={product._id}>
              {/* <div className="card" key={product._id}> */}
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt="" class="card__img" />
              </Link>
              <div class="card__data">
                <h1 class="card__title">
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h1>
                <span class="card__preci">${product.price}</span>
                <p class="card__description">{product.description}</p>

                <button
                  class="card__button"
                  onClick={() => addCart(product._id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
  ))}
</div>
 

 <div  className="w3-container tech"  style={{ padding: " 30px" }} id="team">
  <h1 className="w3-center"><b>Overview Of Services</b></h1>

        <div className="w3-row-padding " style={{ marginTop: "32px" }}>
          <div className="w3-col m3 w3-margin-bottom">
            <div className="w3-card ">
              <img
                src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                alt="Buildings"
              />
              <div className="w3-container ">
                <h2 className="w3-center">Ecommerce</h2>
                <h6>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.Phasellus eget enim eu lectus
                  faucibus vestibulum. Suspendisse sodales pellentesque
                 
                </h6>
                
              </div>
            </div>
          </div>
          <div className="w3-col m3 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                alt="Buildings"/>
              <div className="w3-container">
                <h2 className="w3-center">Education</h2>

                <h6>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.Phasellus eget enim eu lectus
                  faucibus vestibulum. Suspendisse sodales pellentesque
                 
                </h6>
               
              </div>
            </div>
          </div>
          <div className="w3-col m3 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                alt="Buildings"
              />
              <div className="w3-container">
                <h2 className="w3-center">Village History </h2>

                <h6>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.Phasellus eget enim eu lectus
                  faucibus vestibulum. Suspendisse sodales pellentesque
                 
                </h6>
               
              </div>
            </div>
          </div>
          <div className="w3-col m3 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80"
                alt="Buildings"
              />
              <div className="w3-container">
                <h2 className="w3-center">Handmade goods</h2>

                <h6>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.Phasellus eget enim eu lectus
                  faucibus vestibulum. Suspendisse sodales pellentesque
                 
                </h6>
                
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
                  <img src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80" />
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
                <span class="fa fa-quote-right right"></span>
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
                  <img src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80" />
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
                <span class="fa fa-quote-right right"></span>
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
                  <img src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80" />
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
                <span class="fa fa-quote-right right"></span>
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

import React from 'react'

export default function login() {
    return (
        <div>
            
        </div>
    )
}

import React, { Component } from 'react'

export class Payment extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>Payment Component</h2>
            </div>
        )
    }
}

export default Payment

import React, { Component, useDebugValue } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'




export class Products extends Component {

    static contextType = DataContext;
    

    render() {
        const {products,addCart} = this.context;
        

        return (
  <section className="Product "> 
  <h2><b> Our Products</b></h2>         
  <div  id="product" >
    
   {
     
        
     products.map(product =>(
        
         <div className="card"  key={product._id}>
             
             <Link to={`/product/${product._id}`}>
                 <img className="card__img " src={product.src} alt=""/>
             </Link>
    
             <div className="card__data ">
                         <h1 className="card__title"><Link to={`/product/${product._id}`}>{product.title}</Link></h1>
                         <span className="card__preci">${product.price}</span>
                         <p className="card__description">{product.description}</p>
                         <button className="card__button" onClick={()=> addCart(product._id)}>Add to cart</button>
              </div>
         </div>
     ))
 }
 </div>
 </section>   
                   
                   
        )
    }
}

export default Products
