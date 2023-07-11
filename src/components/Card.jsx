import React from "react";

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }   


    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} alt="" className="card-image"/>
            <div className="cards-stats">
                <img src="../src/assets/star.png"className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="card-gray">({props.stats.reviewCount})</span>
                <span className="card-gray"> • </span>
                <span className="card-gray">{props.location}</span>
            </div>
            <p className="card-text">{props.text}</p>
            <span className="card-bold">From ${props.price}</span>
            <span>/ person</span>      
            
        </div>
    )
}