import React from 'react'
import PersonIcon from "@material-ui/icons/Person"
import './SocialEyeIcon.jpg'
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css"
function Header(){
     return(
         <div className='header'>

         {/* <h1>I am header</h1> */}
        <IconButton>
         <PersonIcon fontSize="large" className="header_icon"/>
         </IconButton>

         <img
         className="header_logo"
         src="./SocialEyeIcon.jpg"
         alt=""
         />
         
        <IconButton>
         <ForumIcon fontSize="large" className="header_icon"/>
         </IconButton>
         </div>
     )
 }

 export default Header