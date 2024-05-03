import React from "react";

export const Card = (props) => {
    return (
        <div className="mx-auto">
            <div className="card bg-secondary text-light" style={{ width: "18rem" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/mae-main-v2_3cd6c23e.jpeg?region=0%2C0%2C1280%2C720" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.gender}</p>
                    <p className="card-text">{props.hairColor}</p>
                    <p className="card-text">{props.eyeColor}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}