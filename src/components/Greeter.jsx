import React from "react";
import ReactDOM from "react-dom";

const Greeter = (props) => {
    return (

        <div className="card text-center  w-50 h-25">
            <div className="card-body">
                {props.phrase} {props.name}!
            </div>
        </div>

        

    );
}

export default Greeter;

