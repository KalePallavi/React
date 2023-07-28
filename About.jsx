import React from "react";

function About(props){
    return(
        <>
    <div className="col-4">
        <div className="card">
          <div className="card-header">
            <img src={props.img} className="w-100"/>
          </div>
          <div className="card-body">
            <h1 className="text-center">Blog{props.text}</h1>
            <p>{props.desc}</p>
            <button className="btn btn-primary mt-3">View</button>
          </div>
        </div>

      </div>
    </>
    )
}


export default About;
