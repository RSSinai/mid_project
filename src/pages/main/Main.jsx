import React from 'react'
import ResponsiveAppBar from '../../components/navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import './main.css'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
const Main = () => {
  return (
    <div className='main-container'>
        <ResponsiveAppBar/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Main