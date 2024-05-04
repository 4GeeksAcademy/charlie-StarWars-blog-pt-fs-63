import React from "react";
import { Link } from "react-router-dom";

export const PersonCard = (props) => {
    return (
        <div className="mx-auto me-3">
            <div className="card bg-secondary text-light" style={{ width: "18rem" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/mae-main-v2_3cd6c23e.jpeg?region=0%2C0%2C1280%2C720" className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text m-1">Gender: {props.gender}</p>
                        <p className="card-text m-1">Hair Color: {props.hairColor}</p>
                        <p className="card-text m-1 mb-2">Eye Color: {props.eyeColor}</p>
                    </div>
                    <button onClick={props.onClick} href="#" className="btn btn-primary align-self-end">Read More</button>
                </div>
            </div>
        </div>
    )
}