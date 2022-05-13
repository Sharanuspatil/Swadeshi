import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import { Button } from './Button';

function Cards() {
    return (
<div className='cards'>
     <h1>Lets Share the Knowledge</h1>
     <div className='cards__container'>
                <div className='cards__wrapper'>
                <div className="cards__item">
                     
                      <Carditem
                        src={process.env.PUBLIC_URL + '/videos/video6.mp4'} 
                        text="know how to sow seeds on field
                        we'll help you to know other creative thing"
                      />
                    <div className="cards__item">
                    <div className="cards__item__right">
                        <h2>
                            Author: Bhumika
                       </h2>
                       <h5>
                           Category:DIY
                           </h5>
                        <p>
                        Want a DIY shoe to rock with your dress?! Let's learn how to make that with Vikas! He'll tell you all you need to know to make a shoe! So what are you waiting for? Let's get started!
                            
                        </p>
                        <div className="Socialicons">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div>
                        
                        </div>
                    </div>
            </div>
        </div>
               
                <div className='cards__wrapper'>
                <div className="cards__item">
                     
                     
                        
                        <div className="cards__item">
                        <div className="cards__item__right">
                        <h2>
                            Author: Shreyas
                       </h2>
                       <h5>
                           Category:Food
                           </h5>
                        <p>
                        Ramesh makes the best dosas in the world . Want some mouth watering buttery dosas but don’t know how to make one? Ramesh has got you covered. Take a look at his simple dosa procedure and make your own mouth watering dosa! Happy Dosa Time:)
                                
                        </p>
                        <div className="Socialicons">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div>
                        
                        </div>
                        
                    </div> 
                    <Carditem
                        src={process.env.PUBLIC_URL + '/videos/video7.mp4'}
                        text="know how to sow seeds on field
                        we'll help you to know other creative thing"
                       
                      />
                  
            </div>
        </div>
                <div className='cards__wrapper'>
                <div className="cards__item">
                     
                      <Carditem
                        src={process.env.PUBLIC_URL + '/videos/video8.mp4'}
                        
                        text="know how to sow seeds on field
                        we'll help you to know other creative thing"
                       
                        /> 
                        <div className="cards__item">
                        <div className="cards__item__right">
                        <h2>
                              Author:Sharanu
                        </h2>
                        <h5>
                            Category:Inspiration
                            </h5>
                        <p>
                                 Let's watch women change the world! let's see how simple satin bags have changed the lives of women. Women across villages are proving that they are not less than any man ! Let's get inspired!
                            
                        </p>
                        <div className="Socialicons">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        

       <div className='cards__wrapper'>
           <h1>Paid Videos</h1>
                <div className="cards__item">
                     
                    
                        <div className="cards__item">
                        <div className="cards__item__right">
                        <h2>
                              Author:Sharanu
                        </h2>
                        <h5>
                            Category:Handmade Goods
                        </h5>
                        <p>
Jute material is a natural vegetable fibre which is made from the outer stem and skin of a jute plant. Jute is an incredibly versatile material which also makes up hessian cloth, however, it is most commonly used now for making durable items such as eco-friendly jute bags.
                            
                        </p>
                        <h6>
                           Want To learn how to make Jute bags
                           </h6>
                         <h6>
                             Price 19$
                         </h6> 
                        <Button className="register" >
                            Register
                        </Button>

                        </div>
                    </div>
                    <Carditem
                        src={process.env.PUBLIC_URL + '/videos/song2.mp4'}
                        
                        text="know how to sow seeds on field
                        we'll help you to know other creative thing"
                       
                        /> 
            </div>
        </div>
            
       <div className='cards__wrapper'>
                <div className="cards__item">
                     
                      <Carditem
                        src={process.env.PUBLIC_URL + '/videos/song1.mp4'}
                        
                        text="know how to sow seeds on field
                        we'll help you to know other creative thing"
                       
                        /> 
                        <div className="cards__item">
                        <div className="cards__item__right">
                        <h2>
                              Author:Varsha 
                        </h2>
                        <h5>
                            Category:Dance
                        </h5>
                        <p>
                        Bharatanatyam  also called as Sadhir Attam, is a major form of Indian classical dance that originated in Tamil Nadu It has flourished in the temples and courts of southern India since ancient times.
                        </p>
                       <h6>
                           Want To learn Bharatanatyam Register
                           </h6>
                         <h6>
                             Price 29$
                             </h6>                           
                        <Button className="register">
                            Register
                        </Button>
                        </div>
                    </div>
            </div>
        </div>
            

              
                

 </div>
</div>
    );
}

export default Cards;
