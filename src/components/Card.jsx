import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <img src="../src/assets/image1.png" alt="" className="card-image"/>
            <div className="cards-stats">
                <img src="../src/assets/star.png"className="card-star"/>
                <span>5.0</span>
                <span className="card-gray"> (6)</span>
                <span className="card-gray"> • </span>
                <span className="card-gray">USA</span>
            </div>
            <p className="card-text">Life lessons with Katie Zaferes</p>
            <span className="card-bold">From $136</span>
            <span>/ person</span>
            
            
        </div>
    )
}