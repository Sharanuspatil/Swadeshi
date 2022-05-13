import React from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from 'react-video-js-player';
import "./Cards.css"

function Carditem(props){
    return(
        <>
            <div className ="card__item">
             
                <Link className="cards__item__link" >
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <VideoPlayer src={props.src}  poster={props.poster} alt="Educate two " className="cards__item__img" autoPlay loop muted/>
                    </figure>
                    <div className="cards__item__info">
             <h5 className="cards__item__text"> {props.text}</h5>
             </div>
                </Link>
                
            
            </div>

            
        </>
    )
}
export default Carditem;