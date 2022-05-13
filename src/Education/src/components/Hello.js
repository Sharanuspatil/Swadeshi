import React from 'react';
import '../App.css'
import'./Hello.css';

function Hello(){
    return(
    <div className='hero-container'>
        <video src={process.env.PUBLIC_URL + '/videos/video12.mkv'} autoPlay loop muted />
        <h3>
           Lets Learn!
        </h3>
        <p>Future is in The hands Of Today Generation </p>
       
    
    </div>
    );
}
export default Hello;
