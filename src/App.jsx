import { useState } from 'react'
import './App.css'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Services from '../components/Services'

function App() {


  return (
    <>
    <section>
    <NavBar/>
    <HeroSection/>
    </section>
    <Services/>
    </>
  )
}

export default App
