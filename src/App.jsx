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
      <div className="card-set">
        <Card
          image="../src/assets/image1.png"
          text="Life lessons with Katie Zaferes"
          rating="4.0"
          country="USA"
          price="136"
        />
        <Card
          image="../src/assets/image2.png"
          text="Life lessons with Katie Zaferes"
          rating="4.4"
          country="Swedan"
          price="224"
        />
        <Card
          image="../src/assets/image3.png"
          text="Life lessons with Katie Zaferes"
          rating="5.0"
          country="UK"
          price="147"
        />
        <Card
          image="../src/assets/image4.jpg"
          text="Life lessons with Katie Zaferes"
          rating="3.6"
          country="India"
          price="200"
        />
        
      </div>
    </div>
  )
} 