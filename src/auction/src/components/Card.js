import classes from './Card.module.css';

const Card = props => {
  return <div className={classes.card}>
    
    {props.children}
  
  
  </div>


  //   products.map(product =>(
                        
  //     <div className="card"  key={product._id}>
  //       {/* <div className="card" key={product._id}> */}
  //           <Link to={`/product/${product._id}`}>
  //               <img src={product.src} alt="" class="card__img"/>
  //           </Link>
  //           <div class="card__data">
  //         <h1 class="card__title">
  //                   <Link to={`/product/${product._id}`}>{product.title}</Link>
  //         </h1>
  //         <span class="card__preci">${product.price}</span>
  //         <p class="card__description">{product.description}</p>
          
  //         <button class="card__button" onClick={()=> addCart(product._id)}>Add to cart</button>
  //           </div>
              
  // </div>
};

export default Card;