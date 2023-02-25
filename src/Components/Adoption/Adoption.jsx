import React, {useEffect} from 'react'
import './adoption.css'
import {FaDog} from 'react-icons/fa'
import {BsGenderMale} from 'react-icons/bs'
// import {FaWifi} from 'react-icons/fa'
// import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

// importing images
import img6 from '../../Assets/canaan.jpg'
import img7 from '../../Assets/pug.png'
import img8 from '../../Assets/poodle.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

// using array to list our offers 
const Adoptions= [
  {
    id:1,
    imgSrc:img8,
    stTdeitle:'Sarabi',
    location:'Kerela',
    age:'15 month',
  },

  {
    id:2,
    imgSrc:img6,
    stTdeitle:'Pug ',
    location:'Delhi',
    age:'8 month',
  },

  {
    id:3,
    imgSrc:img7,
    stTdeitle:'Poodle',
    location:'Goa',
    age:'2 year',
  }

]

const Adoption = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className='adoption container section'>
      <div className="secContainer">

        <div data-aos="fade-up" data-aos-duration='2000' className="secIntro">
          <h2 className="secTitle">
            Adoption
          </h2>
          <p>
          Secondhand animals make first class pets.
          </p>
        </div>
        <div className="mainContent grid">
          {
            Adoptions.map(({id,imgSrc,stTdeitle,location,age})=>{
              return(
                <div data-aos="fade-up" data-aos-duration='3000' className="singleadoption">
                  <div className="destImage">
                    <img src={imgSrc} alt={stTdeitle} />
                  </div>
  
                  <div className="adoptionBody">
                    <div className="price flex">
                      <h4>
                        {age}
                      </h4>
                      <span className="status">
                        For Free
                      </span>
                    </div>
  
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <FaDog className='icon'/>
                    <small>2 Puppies</small>
                  </div>
                  <div className="singleAmenity flex">
                    <BsGenderMale className='icon'/>
                    <small>Male</small>
                  </div>
                </div>
  
                <div className="location flex">
                  <MdLocationOn   className='icon'/>
                  <small>{location}, India</small>
                </div>
  
                <button className="btn flex">
                  View Details 
                  <BsArrowRightShort className='icon'/>
                </button>
                  </div>
                </div>
              )
            })

          }

          
        </div>
      </div>
    </section>
  )
}

export default Adoption
