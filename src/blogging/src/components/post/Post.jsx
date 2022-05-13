import React from 'react'
import './post.css'
import { Link } from "react-router-dom";

function Post() {
    return (

    <>
        <div className="post">
            
            <Link className="link"  to ="/post/1" ><img className="postImg" src={process.env.PUBLIC_URL + '/images/blog1.jpg'} alt=""/></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Village</span>
                    <span className="postCat">Life</span>

                </div>
                <span className="postTitle">Gokarna Village, Maharashtra</span>

                <span className="postDate">1 hour ago </span>

            </div>
            <p className="postDesc">It's a peaceful village near Goa which houses the most famous original Lingam image of Lord Shiva.  Although, lately hippies have started migrating towards Gokarna to get away from the unwanted commercialization that has seeped through Goa. The much cleaner and quieter beaches here coupled with rasta-styled cafes and dreadlocked backpackers enhance the overall hippie culture of the place. Who thought a village could give you such scenic views and breath-taking beachy sides - there's no way you will not fall in love with place which seems like heaven for all those who love the sea. Be ready to be mesmerized by jaw-dropping sunsets and magnificient landscape views to leave you awe-struck.

</p>
 
          </div>

          <div className="post">
            <Link className="link"  to = "/post/2" ><img className="postImg" src={process.env.PUBLIC_URL + '/images/blog2.jpg'}alt=""/></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Village</span>
                    <span className="postCat">Life</span>

                </div>
                <span className="postTitle">Art Depicting Life In An Indian Village.</span>
               
                <span className="postDate">1 hour ago </span>

            </div>
            <p className="postDesc">“Indian villages” the term itself brings in the nostalgia of a stress-free life, filled with grass between your toes, a smell of jackfruits popping, roosters calling and fulfilled memories. A place where we can truly enjoy the beauty of our land. Far far away from the hustle bustle of the city life, the body takes up a new agility with the farm fresh food and pollution free air.</p>
            </div>
            <div className="post">            
            <Link className="link"  to = "/post/3" ><img className="postImg" src={process.env.PUBLIC_URL + '/images/Blog3.jpg'} alt=""/></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Farming</span>
                    <span className="postCat">Life</span>

                </div>
                <span className="postTitle">Farming Realities of India</span>
                
                <span className="postDate">1 hour ago </span>

            </div>
            <p className="postDesc">The observable reality at the same time is this. Nearly two-thirds of the workforce is engaged in agriculture but produces barely a seventh of the gross domestic product (GDP). This puts the per capita contribution to GDP of the farm household to about a tenth of its urban counterpart. The disparities in living standards perhaps are less stark, though quite bad. Measured in terms of monthly per capita expenditure, a rural household in Bihar spends at best 30% of what an urban household in Maharashtra does.</p>
            </div>


            <div className="post">
            <Link className="link"  to = "/post/4" ><img className="postImg" src={process.env.PUBLIC_URL + '/images/blog.jpg'} alt=""/></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Village</span>
                    <span className="postCat">Education</span>

                </div>
                <span className="postTitle">Challenges in Rural Education</span>
            
                <span className="postDate">1 hour ago </span>

            </div>
            <p className="postDesc">Majority of India still lives in villages and so the topic of rural education in India is of utmost importance. A survey named called the Annual Status of Education Report (ASER), shows that even though the number of rural students attending schools is rising, but more than half of the students in fifth grade are unable to read a second grade text book and are not able to solve simple  mathematical problems. Not only this, the level of maths and reading is further declining. Though efforts are being made, they are not in the right direction. The reason cited for this problem in surveys is the increasing number of single classroom to educate students from more than one grade. In some states attendance of teachers and students is also declining. These are a few reasons why schools have failed to educate rural India..</p>
            </div>

            <div className="post">
            <Link className="link"  to = "/post/5" ><img className="postImg" src={process.env.PUBLIC_URL + '/images/blog6.jpg'} alt=""/></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Village</span>
                    <span className="postCat">History</span>
.
                </div>
                <span className="postTitle">Ganga aarti  mesmerizing event  which can be experienced in a boat on the river.</span>
                
                <span className="postDate">1 hour ago </span>

            </div>
            <p className="postDesc">Varanasi, popularly known as the City of Lights or Kashi, is a sacred city on the west bank of the River Ganga. It is said to be one of the oldest cities in India whose history goes back over 3000 years. Varanasi has remained a significant religious destination for pilgrims in India, and for international travelers, it reflects the culture and historical prosperity of India. Today, Varanasi is a bustling city, where every winding street leads to another, ghats are constantly packed, and the scent of incense is noticeable all around. The aartis and the skimming of earthen lights over the waters of Ganga at night is also a significant component of the character of Varanasi.

</p>
           </div>

           <div className="post">
           
            <Link className="link"  to = "/post/6" ><img className="postImg" src={process.env.PUBLIC_URL + '/images/blog7.jpg'} alt=""/></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Village </span>
                    <span className="postCat">History</span>

                </div>
                <span className="postTitle">Gwalior Fort which was called ‘the pearl in the necklace of the forts of India’ </span>
               
                <span className="postDate">1 hour ago </span>

            </div>
            <p className="postDesc">The majestic town of Gwalior is situated in the center of India, or the province of Madhya Pradesh. Gwalior is home to royal residences, historic sites, and beautiful temples. The town is well known for the Gwalior Fort. One can hire a travel guide in the fort and know the history of the state in depth. Other major attractions are Gujari Mahal, Sas Bahu temple, Teli ka Mandir, Tomb of Muhammad Ghaus and Tansen, Bir Singh Mahal, Padavali, and Bateshwar. Wildlife enthusiasts can consider traveling to the wild trails of Madhav National Park located in proximity to the city.

</p>
            </div>
        
        </>
    )
}

export default Post
