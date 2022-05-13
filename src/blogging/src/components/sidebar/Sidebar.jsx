import React from 'react'
import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT US

                </span>
                <img src="images/img1.png" alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis .eius similique.
                </p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    
                   <ul className="sidebarList">
                       <li className="sidebarListItem"> Farming</li>
                       <li className="sidebarListItem"> Artifacts</li>
                       <li className="sidebarListItem"> Sale</li>
                       <li className="sidebarListItem"> Bidding</li>
                       <li className="sidebarListItem"> Life</li>
                       <li className="sidebarListItem"> Pottery</li>
                       <li className="sidebarListItem"> Women</li>

                   </ul></div>
                   <div className="sidebarItem">
                   <span className="sidebarTitle">FOLLOW US</span>
                   <div className="sidebarSocial">
                       <i className="fa fa-twitter"></i>
                       <i className="fa fa-facebook"></i>
                        <i className="fa fa-youtube"></i>
                        <i className="fa fa-instagram"></i>
                            

                   </div>

                   </div>
                  
        </div>
    )
}

export default Sidebar
