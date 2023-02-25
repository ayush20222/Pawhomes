import React, {useEffect} from 'react'
import './breeds.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

// import the images 
import img2 from '../../Assets/german.jpg'
import img5 from '../../Assets/golden.png'
import img7 from '../../Assets/great.jpg'
import img9 from '../../Assets/husky2.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


// using high order array to display all destination using map so we have to list all destination in one array and later we can call each distribution by index 
const Data = [
  {
  id:1,
  imgSrc: img2,
  desTitle: 'German Shepherd',
  location: 'Bhopal',
  gender: 'Male',
},
{
  id:2,
  imgSrc: img5,
  desTitle: 'Golden Retriever',
  location: 'Gujarat',
  gender: 'Female',
},
{
  id:3,
  imgSrc: img7,
  desTitle: 'Great Dane',
  location: 'Punjab',
  gender: 'Female',
},
{
  id:4,
  imgSrc: img9,
  desTitle: 'Husky',
  location: 'Goa',
  gender: 'Male',
},
]

const Breeds = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
   <section className="breeds section container">
    <div className="secContainer">
      <div className="secHeader flex">
        <div data-aos="fade-right" data-aos-duration='2500' className="textDiv">
          <h2 className="secTitle">
            Popular Breeds
            </h2>
            <p>
              Come let's see some of most loved breeds of puppies .
            </p>
        </div>
        <div data-aos="fade-left" data-aos-duration='2500' className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon'/>
        </div>
      </div>
      <div className="mainContent grid">
        {
          Data.map(({id,imgSrc,desTitle,location,gender})=>{
            return(
              <div data-aos="fade-up"  className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image Title" />
                  <div className="overlayInfo">
                    <h3>{desTitle}</h3>
                    <p>{gender}</p>
                    <BsArrowRightShort className='icon'/>
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">
                    0{id}
                  </div>
                  <div className="destText flex">
                    <h6>
                      {location}
                    </h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className='icon'/>
                      </span>
                      Pawhomes 
                    </span>
                  </div>
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

export default Breeds
