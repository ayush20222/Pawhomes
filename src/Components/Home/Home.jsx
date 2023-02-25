import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">

          <h1 data-aos="fade-up" className='title'>
          Happiness is a warm puppy
          </h1>

          <p data-aos="fade-up" data-aos-duration='2500' className="subTitle">
          Let's give dog a house, and they'll give us a home.
          </p>

          <button data-aos="fade-up" data-aos-duration='3000' className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>
        
        <div className="homeCard grid">
          <div data-aos="fade-right" data-aos-duration='2000' className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" name="" id="" placeholder='Current Location'/>
          </div>

          <div data-aos="fade-right" data-aos-duration='2500' className="distDiv">
            <label htmlFor="distance">Breed</label>
            <input type="text" name="" id="" placeholder='Lebra/Pug..'/>
          </div>

          <div data-aos="fade-right" data-aos-duration='3000' className="priceDiv">
            <label htmlFor="price">Gender</label>
            <input type="text" name="" id="" placeholder='Male/Female'/>
          </div>

          <button data-aos="fade-left" data-aos-duration='2000' className='btn'>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
