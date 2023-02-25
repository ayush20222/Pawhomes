import React, {useEffect} from 'react'
import './footer.css'
import {FaPaw} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])



  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration='2000' className="logoDiv">
          <div data-aos="fade-up" data-aos-duration='2000' className="footerLogo">
            <a href="#" className='logo flex'>
              <h1>
              <FaPaw className='icon'/>
              Pawhomes 
              </h1>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-duration='2500' className="socials flex">
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration='3000' className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Adoption</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration='4000' className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Rescue Team</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Terms & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration='5000' className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
         <span className="phone">+91-82451 56789 </span>
         <span className="email">pawhomes@mail.com</span>
        </div>
      </div>
    </div>
   
  )
}

export default Footer
