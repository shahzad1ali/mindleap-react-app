import React from 'react'
import heroImg from '../assets/hero.webp'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from '../utilities/animationVariantes'

const Hero = () => {
  return (
 <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
<div className='container mx-auto  flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
  {/* {left side} */}

  <motion.div
    variants={fadeIn('down' , 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}}
  className='md:w-1/2 '>
     <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug '>Start Your Journy to Mental Willness</h1>
 <p className='text-lg mb-12 md:pr-8'>We lover our stress level, it make not easy to write this type of paras, i have many practices $ creats projects for this type of project , i have learn and crates many types of projcts.</p>

 <button className='bg-primary text-white py-3.5 px-8 font-medium rounded hover:bg-primary/90'>
  <a href="#contact" className='flex gap-1 items-center'>
    <span>Get Started</span>
    <FaArrowAltCircleRight />
  </a>
 </button>
  </motion.div>
<motion.div 
  variants={fadeIn('left' , 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false, amount: 0.7}}
className='md:w-1/2 h-full'>
     {/* {right side} */}
    <img src={heroImg} alt="hero img" className='w-full object-cover ' />
</motion.div>

</div>
 </section>
  )
}

export default Hero