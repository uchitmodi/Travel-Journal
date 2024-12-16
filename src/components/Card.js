import React from "react";
import "../style.css";


export default function Card(props){
    console.log(props);
    return(
        <div>
            <section>
            <img src={props.cardImg} align="left" alt="" className="main--img"/>
                <div className="main--item">
                    <span>
                    <img src="../image/locationicon.jpg" alt="locationicon" className="locationicon" />
                    {props.location} &emsp;&emsp;
                    <a href={props.link} className="main--link">View on Google Maps</a>
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                    <p>
                    {props.description}
                    </p>
                    </span>
                </div>
            </section>
        <hr></hr>
        </div>

    )
}