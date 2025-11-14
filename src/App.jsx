import { useState } from 'react'
import './App.css'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import FeedBack from '../components/FeedBack'

function App() {


  return (
    <>
    <section>
    <NavBar/>
    <HeroSection/>
    </section>
    <Services/>
    <FeedBack/>
    </>
  )
}

export default App
