import React, {useEffect} from 'react'
import './experience.css'

import {BsArrowRightShort} from 'react-icons/bs'

// importing images 
import img from '../../Assets/dog1.jpeg'
import img2 from '../../Assets/dog3.jpeg'
import img3 from '../../Assets/dog2.jpeg'
import img4 from '../../Assets/dog4.jpeg'



import Aos from 'aos'
import 'aos/dist/aos.css'

// using map method to display our posts 
const Posts = [
  {
    id:1,
    postImage: img,
    title: 'Shocked by Trauma of Wounds',
    desc: 'When a neighbor saw a young dog who was too weak to climb out of a gutter, he called our rescue team. When we lifted her, we saw that she had multiple puncture wounds and was completely weak. '
  },
  {
    id:2,
    postImage: img2,
    title: 'Transmittable vaginal disease',
    desc: 'The girl who came to us with a TVT (transmittable vaginal tumor) has completely recovered now.We will keep her under observation for a few more days and then release her back to her location.' 

  },
  {
    id:3,
    postImage: img3,
    title: 'Doing his daily dressing',
    desc: 'His leg is getting better with each passing day and we are doing his daily dressing.Bronze came to us loaded with ticks. Even though we washed the shelter with chemicals for ticks, they reappeared'
  },
  {
    id:4,
    postImage: img4,
    title: 'Saved From Road Accident',
    desc: 'The baby was hit by a running vehicle, hence he was bleeding from the nose. The caller contacted us yesterday, and we asked her to get the puppy, but sadly she couldn’t. Today she got the puppy.'
  },
  

]


const Experience = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])



  return (
    <section className="experience container section">
      <div className="secContainer">
        
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration='2000' className="secTitle">
            Our Best Experiences
          </h2>
          <p data-aos="fade-up" data-aos-duration='2500'>
          An insight to incredible experience of the team .

          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id,postImage,title,desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration='2000' className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration='3000'>
                      {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration='4000'>
                      {desc}
                    </p>
                  </div>

                  <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                    Read More
                    <BsArrowRightShort className='icon'/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience
