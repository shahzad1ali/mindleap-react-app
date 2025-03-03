import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";    
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home')
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  useEffect (() => {
    window.addEventListener('scroll', handleScrool);
    return () => window.removeEventListener('scroll', handleScrool)
  }, [])

const handleScroolTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        })
    }
}

  const handleScrool = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                setActiveSection(section)
            }
        }
    })
  }
 
    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 
        space-y-2 md:space-y-0 p-4 md:p-0 '>
            <li>
                <motion.a 
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu(); 
                  handleScroolTo('home')
              }}
                href="#home"
               
                className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}
                >Home</motion.a>
            </li>
            <li>
                <motion.a href="#services"
                 whileHover={{scale:1.1}}
                 whileTap={{scale: 0.9}}
                 onClick={(e) => {
                   e.preventDefault();
                   handleCloseMenu(); 
                   handleScroolTo('services')
               }}
                className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}
                >Services</motion.a>
            </li>
            <li>
                <motion.a href="#about"
                 whileHover={{scale:1.1}}
                 whileTap={{scale: 0.9}}
                 onClick={(e) => {
                   e.preventDefault();
                   handleCloseMenu(); 
                   handleScroolTo('about')
               }}
                className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}
                >About Us</motion.a>
            </li>
            <li>
                <motion.a href="#pricing"
                 whileHover={{scale:1.1}}
                 whileTap={{scale: 0.9}}
                 onClick={(e) => {
                   e.preventDefault();
                   handleCloseMenu(); 
                   handleScroolTo('pricing')
               }}
                className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}
                >Pricing</motion.a>
            </li>
            <li>
                <motion.a href="#testimonial"
                  whileHover={{scale:1.1}}
                  whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu(); 
                    handleScroolTo('testimonial')
                }}
                className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}
                >Testimonial</motion.a>
            </li>
            

        </ul>
    )
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
          {/* {logo} */}
            <div>
                <a href="/">
                <img src="/logo.svg" alt="logo" />
                </a>
            </div>
          
          {/* {navitem} */}
           <div className='hidden md:flex flex-grow justify-center'>
            <nav>
                {navLinks}
            </nav>
           </div>

          {/* {button} */}

             <div className='hidden md:block'>
                <a
                onClick={e => {
                  e.preventDefault();
                  handleScroolTo('contact')
                }}
                href="#contact" className='text-white bg-primary/90 px-4 py-2 rounded'   
                >Contact Us</a>
             </div>

             {/* {ican} */}
             <div className='block md:hidden'>
                <button
                onClick={handleToggle}
                className={`text-white focus:outline-none ${isOpen ? "border border-white" : "" }`}>
                    
                <BiMenuAltRight className=' size-6' />
                </button>
             </div>
        </div>  

        {/* {mobile network} */}
          {
            isOpen && (
                 <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
 
                        <li className='py-2'>
                        <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                        onClick={(e) => {
                             e.preventDefault();
                            handleCloseMenu();
                            handleScroolTo('contact')
                        }
                        }
                        >Contact Us </a>
                    </li>
                    </ul>
                   
                 </nav>
            )
          }

        </header>
  )
}

export default Navbar
