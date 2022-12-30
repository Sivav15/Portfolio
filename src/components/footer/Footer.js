import React from 'react'
import './Footer.css'
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from '@material-ui/icons/Call';
function Footer() {
  return (
    <footer class="footer">
      <div>
        <span className='footer-icon' onClick={() => window.open("https://github.com/Sivav15", "_blank")}> <GitHubIcon fontSize='small' /> </span>
        <span className='footer-icon' onClick={() => window.open("https://www.linkedin.com/in/sivanathan-v-092484218/", "_blank")}> <LinkedInIcon fontSize='small' /></span>
        <span className='footer-icon' onClick={() => window.open("mailto:sivanathanv1999@gmail.com", "_blank")}> <MailIcon fontSize='small' /></span>
        <span className='footer-icon' onClick={() => window.open("tel://+919566940955", "_blank")}> <CallIcon fontSize='small' /></span>
      </div>
      <div >
        <p class="m-2">Copyright &copy; 2022 All rights reserved | Sivanathan</p>
      </div>
    </footer>
  )
}

export default Footer