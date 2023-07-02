import React from 'react'
import Navbar from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Contacts from './components/Contacts'

// import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <div className='contacts'>
      <Contacts
        image="../src/assets/cat.jpg"
        name="Ashan Dimantha"
        phone="+94 71 311 2927"
        email="ashan@gmail.com"
      />
      <Contacts
        image="../src/assets/dushan.png"
        name="Dushan Senadheera"
        phone="+94 71 455 6767"
        email="nethmi@gmail.com"
      />
      <Contacts
        image="../src/assets/tharun.jpg"
        name="Tharun Thathsara"
        phone="+94 78 999 6735"
        email="binuli@gmail.com"
      />
      <Contacts
        image="../src/assets/amith.jpg"
        name="Amith Indika"
        phone="+94 72 567 9091"
        email="arabiya@gmail.com"
      />
      </div>
    </div>
  )
}