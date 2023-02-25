import React, {useEffect} from 'react'
import './about.css'


// images importing 
import img from '../../Assets/home.jpeg'
import img2 from '../../Assets/res.jpg'
import img3 from '../../Assets/badge2.png'

import vid from '../../Assets/video1.mp4'


import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Our Services
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration='2000' className="singleItem">
            <img src={img} alt="Image Name" />

            <h3>PROVIDING PETS A HOME</h3>

            <p>
            Right now, Pahomes is providing shelter, daily care and critical treatment for 72 animals that are rescued in India. Your urgent gift today can help us rescue more victims of animal fighting, who are in need of critical care.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration='2500' className="singleItem">
            <img src={img2} alt="Image Name" />

            <h3>RESCUING PETS</h3>

            <p>
            When someone in Lucknow spots an injured or ill animal, they can call our  Helpline to report the condition. The number of caring people contacting us to help an animal has grown continuously, with an average of 70 animals.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration='3000' className="singleItem">
            <img src={img3} alt="Image Name" />

            <h3>INSPIRE THE COMMUNITY</h3>

            <p>
            We vaccinate against rabies and other illnesses also educate the community about helping animals. Our rescue team inspires the community to care for the lives of all animals about the problems they face and the different ways to help.
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration='2000' className="cardText">
              <h2>
                Wonderful real life experience up in here.
              </h2>
              <p>When an 85-pound mammal licks your tears away, then tries to sit on your lap, it’s hard to feel sad.</p>
            </div>

            <div data-aos="fade-left" data-aos-duration='2000' className="cardVideo">
              <video src={vid} autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
