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
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        price={item.price}

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