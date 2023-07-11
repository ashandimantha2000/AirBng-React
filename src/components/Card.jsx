import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.image} alt="" className="card-image"/>
            <div className="cards-stats">
                <img src="../src/assets/star.png"className="card-star"/>
                <span>{props.rating}</span>
                <span className="card-gray">({props.reviewCount})</span>
                <span className="card-gray"> • </span>
                <span className="card-gray">{props.location}</span>
            </div>
            <p className="card-text">{props.text}</p>
            <span className="card-bold">From ${props.price}</span>
            <span>/ person</span>      
            
        </div>
    )
}