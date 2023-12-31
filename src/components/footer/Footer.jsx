import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'><strong>ABHISHEK SINGH</strong></a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; ABS. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer