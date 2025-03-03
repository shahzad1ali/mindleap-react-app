import React, { useState } from 'react'
import { FaEnvelope, FaGlobe, FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from '../utilities/animationVariantes'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [message, setMessage] = useState("")
  const [showModle, setShowModle] = useState(false)


const handleSubmit = (e) => {
e.preventDefault();
const data = {
  name,
  email,
  phone,
  country,
  message,
}
  //  console.log(data);
  if (!data) {
    alert("please all fields")
     return;
  }
  setShowModle(true)
   
}

const closeModal = () => {
  setShowModle(false)
  setName("")
  setEmail("")
  setPhone("")
  setCountry("")
  setMessage("")

}


  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
      <motion.div 
        variants={fadeIn('up' , 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
      className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 '>
        {/* {left side} */}
        <div className='space-y-8'>
          <h2 className='text-3xl font-bold font-secondary mb-4 text-white'>Make an Appointment</h2> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
            <div className='flex items-start gap-4  '>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3 '>
              <FaUser className='text-primary ' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium text-white'>24 Hours services</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className='flex items-start gap-4  '>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3  '>
              <FaEnvelope className='text-primary ' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium text-white'>Export therypatic</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className='flex items-start gap-4  '>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3 '>
              <FaPhoneAlt className='text-primary ' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium text-white'>High qualitu core</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className='flex items-start gap-4  '>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3 '>
              <FaGlobe className='text-primary ' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium text-white'>Trusted Clinic</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        {/* {right side} */}
          <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
             <h3 className='text-2xl font-bold mb-4'>Book Appontment</h3>
             <form onSubmit={handleSubmit} className='space-y-8 '>
              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                onChange={e => setName(e.target.value)}
                type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:right-2 focus:ring-primary shadow' />
                <input
                onChange={e => setEmail(e.target.value)}
                type="email" placeholder='Email Adress' className='w-full p-4 rounded-md focus:outline-none focus:right-2 focus:ring-primary shadow' />
              </div>

              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                onChange={e => setPhone(e.target.value)}
                type="contact" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:right-2 focus:ring-primary shadow' />
                <input
                onChange={e => setCountry(e.target.value)}
                type="country" placeholder='Country Name' className='w-full p-4 rounded-md focus:outline-none focus:right-2 focus:ring-primary shadow' />
              </div> 
<textarea
  onChange={e => setMessage(e.target.value)}
rows="5"
placeholder='Write Your Massege ...' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'
></textarea>
<button className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90'>Send Massege</button>

             </form>
          </div>

        </div>
      </motion.div>
         {
          showModle && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                <h2 className='text-2xl font-bold mb-4'>Thank you!</h2>
                <p>Thank You, {name} , for submiting your query. </p>
                <button 
                onClick={closeModal}
                className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
              </div>
            </div>
          )
         }

    </div>
  )
}

export default Contact