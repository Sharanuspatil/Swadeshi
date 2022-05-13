import React from 'react'
import "./singlepost.css"

function SinglePost() {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
               <img className="singlePostImg" src={process.env.PUBLIC_URL + '/images/blog1.jpg'} alt=""></img>
                <h1 className="singlePostTitle"> villages are the beautiful Places
                <div className="singlePostEdit">
                
                            </div></h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author:<b>Ryan</b></span>  
                <span className="singlePostDate"> 1 hour ago</span> </div>
           </div>
           <p className="singlePostDesc"> It's a peaceful village near Goa which houses the most famous original Lingam image of Lord Shiva.  Although, lately hippies have started migrating towards Gokarna to get away from the unwanted commercialization that has seeped through Goa. The much cleaner and quieter beaches here coupled with rasta-styled cafes and dreadlocked backpackers enhance the overall hippie culture of the place. Who thought a village could give you such scenic views and breath-taking beachy sides - there's no way you will not fall in love with place which seems like heaven for all those who love the sea. Be ready to be mesmerized by jaw-dropping sunsets and magnificient landscape views to leave you awe-struck.</p>

        </div>
    )
}

export default SinglePost
