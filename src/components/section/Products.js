import React, { Component} from 'react'
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
                         <span className="card__preci"> ₹{product.price}</span>
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
