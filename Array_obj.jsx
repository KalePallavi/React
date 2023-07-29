import React from "react";

function Array_obj(props){
    return(
        <div className="card">
            <div className="card-header">
                <img src={props.img} height="200px" width="100%"/>
            </div>
            <div className="card-body">
                <h4>Name:{props.name}</h4>
                <h4>Email:{props.email}</h4>
                <h4>Possition:{props.possition}</h4>
                <h4>Address:{props.address}</h4>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary">View</button>
            </div>

        </div>
    )
}
export default Array_obj;
