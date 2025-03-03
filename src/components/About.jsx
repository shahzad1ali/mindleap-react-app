import React, { useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import thumnailImg from '../assets/video-thumbnail.webp'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from"../utilities/animationVariantes"

const About = () => {
  const [isVedioPlaying, setisVedioPlaying] = useState(false);

  const handleVedioPlay = () => {
    setisVedioPlaying(true)
  }

  const handleCloseVedio = () => {
    setisVedioPlaying(false)
  }

  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
      <motion.div
      variants={fadeIn('up' , 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* {left side} */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
            {
              !isVedioPlaying ? (
                <div className='relative'>
                  <img src={thumnailImg} alt="vedio thumnail" className='w-full md:h-[446px] h-auto rounded-lg object-cover' />
                  <button 
                  onClick={handleVedioPlay}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'>
                  <FaPlayCircle className='size-12 text-white' />
                  </button>
                </div>
              ) : (null )
            }
          </div>

          {/* {right side} */}
          <div className='md:w-1/2 w-full' > 
            <h2 className='text-4xl capitalize font-secondary font-bold mb-4 leading-snug'>individual consult and therpy </h2>
            <p className='text-lg mb-12 md:pr-8'>We lover our stress level, it make not easy to write this type of paras, i have many practices $ creats projects for this type of project , i have learn and crates many types of projcts.</p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded hover:bg-primary/90'>
  <a href="#contact" className='flex gap-1 items-center'>
    <span>Get Started</span>
    <FaArrowAltCircleRight />
  </a>
 </button>
          </div>
        </div>
         {
          isVedioPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center '>
              <div className='relative w-full h-full flex items-center justify-center z-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/o5054ld2m0Q?si=e7HpGvHlzpBo7OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-lg' ></iframe>
              <button onClick={handleCloseVedio} className='absolute top-10 right-10 text-white text-2xl cursor-pointer'>
                X</button>
            </div>
            </div>
          )
         }

      </motion.div>
    </div>
  )
}

export default About