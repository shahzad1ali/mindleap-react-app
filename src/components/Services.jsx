import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'
import {motion} from "framer-motion"
import {fadeIn} from "../utilities/animationVariantes"


const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 mx-auto'>
        <motion.div
          variants={fadeIn('up' , 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do  Together</h2>
        <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam? Quae voluptas blanditiis nam repellat omnis veritatis quia fugit obcaecati! Ducimus consectetur saepe suscipit, voluptate incidunt eum voluptates explicabo iste!</p>
        </motion.div>
      </div>
      {/* {service catagory} */}
      <div className='py-12 md:w-4/5 mx-auto'>
      <Tabs>
    <motion.TabList 
        variants={fadeIn('up' , 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
    className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Couple counsling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self Confidence</Tab>

    </motion.TabList>

    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8 ">
      <motion.div
          variants={fadeIn('up' , 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
      className='flex flex-col md:flex-row gap-8 mt-8 '>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Couple counsling</h3>
         <p className='mb-8 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quis id consequuntur voluptatem iure! Similique velit eveniet adipisci fuga magni soluta.it to make a type of speciman book.</p>
         <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
         <ul className='list-disc list-inside space-y-3'>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>

         </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </motion.div>
    
    </TabPanel>

    <TabPanel  >
      <motion.div
          variants={fadeIn('up' , 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
      className='flex flex-col md:flex-row gap-8 mt-8 '>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
         <p className='mb-8 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quis id consequuntur voluptatem iure! Similique velit eveniet adipisci fuga magni soluta.it to make a type of speciman book.</p>
         <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
         <ul className='list-disc list-inside space-y-3'>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>

         </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </motion.div>
    
    </TabPanel>
   
    <TabPanel  >
      <motion.div 
          variants={fadeIn('up' , 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
      className='flex flex-col md:flex-row gap-8 mt-8 '>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
         <p className='mb-8 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quis id consequuntur voluptatem iure! Similique velit eveniet adipisci fuga magni soluta.it to make a type of speciman book.</p>
         <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
         <ul className='list-disc list-inside space-y-3'>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>

         </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </motion.div>
    
    </TabPanel>

    <TabPanel  >
      <motion.div 
      variants={fadeIn('up' , 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className='flex flex-col md:flex-row gap-8 mt-8 '>
      <div
      className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Self Confidence</h3>
         <p className='mb-8 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quis id consequuntur voluptatem iure! Similique velit eveniet adipisci fuga magni soluta.it to make a type of speciman book.</p>
         <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
         <ul className='list-disc list-inside space-y-3'>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>
          <li>Understanding Relationship Dynamic</li>

         </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </motion.div>
    
    </TabPanel>

    
   
   
  </Tabs>
      </div>
      </div>
  )
}

export default Services