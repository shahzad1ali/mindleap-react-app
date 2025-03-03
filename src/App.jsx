
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
import WorkingStep from './components/WorkingStep'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='font-primary overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <WorkingStep /> 
        <Pricing />
        <Testimonial />
        <Contact />
        <Footer/>
       
    </div>
  )
}

export default App
