import React from "react";


export default function Contacts(props) {
    const firstName = "Bob";
    const lastName = "Ziroll";
    const myDate = new Date();

    return (

            <div className="contacts-card">
                <div className="contacts-img">
                    <img src={props.image} alt="" />
                </div>
                <h3>{props.name}</h3>
                <div className="card-info">
                    <img src="../src/assets/phone.avif" alt="" />
                    <p>{props.phone}</p>
                </div>
                <div className="card-info">
                    <img src="../src/assets/email.png" alt="" />
                    <p>{props.email}</p>
                </div>
            </div>

    )
}