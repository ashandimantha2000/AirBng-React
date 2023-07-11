import React from 'react'
import Navbar from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

// import './App.css'

export default function App() {
  const cards = data.map((item=>{
    return(
      <Card
        key={item.id}
        // item={item}
        //Spread syntax can be used when all elements from an object or array need to be included in a new array or object
        {...item}

      />
    )
  }))
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-set">
        {cards}
        
      </div>
    </div>
  )
} 