import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";

function TopBar() {
    const user=true;
    return (
        <div className="top">
            <div className="topLeft"><i className="topIcon"  class="fab fa-facebook-square"></i>
            <i  className="topIcon" class="fab fa-twitter-square"></i>
            <i className="topIcon" class="fab fa-pinterest-square"></i>
            <i className="topIcon" class="fab fa-instagram-square"></i></div>
            <div className="topCenter">
           <ul className="topList">
               <li className="topListItem">
                 <Link className="link"  to = "/" >HOME</Link>  </li>
               <li className="topListItem"><Link className="link" to="/education" >Education</Link>  </li>
               <li className="topListItem"><Link className="link" to="/products" >Products</Link> </li>
               <li className="topListItem"><Link className="link" to="/write" >WRITE</Link> </li>
               <li className="topListItem"><Link className="link" to="/settings" >PROFILE</Link> </li>
               <li className="topListItem">{user && "LOGOUT"} </li>

           </ul> </div>
            <div className="topRight">
                {
                    user ? (
                        <img  className="topImg" src="H:\Swadeshi\vcom\src\blogging\public\images\img1.png" alt="">
                        </img>

                    ) :  (
                        <ul className="topList">
                          <li className="topListItem">
                            <Link className="link" to="/login">
                              LOGIN
                            </Link>
                          </li>
                          <li className="topListItem">
                            <Link className="link" to="/register">
                              REGISTER
                            </Link>
                          </li>
                        </ul>
                      )}
           
            <i className="topSearchIcon" class="fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
