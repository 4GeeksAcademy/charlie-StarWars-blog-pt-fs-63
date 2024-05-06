import React from "react";
import luke from "../../img/luke.jpeg"

export const PersonCard = (props) => {


    return (
        <div className="mx-auto me-3">
            <div className="card bg-secondary text-light" style={{ width: "18rem" }}>
                <img src={luke} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text m-1">Gender: {props.gender}</p>
                        <p className="card-text m-1">Hair Color: {props.hairColor}</p>
                        <p className="card-text m-1 mb-2">Eye Color: {props.eyeColor}</p>
                    </div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                        <button onClick={props.onClick} href="#" className="btn btn-primary align-self-end">Read More</button>
                        <button onClick={props.toFavorites} className="btn btn-light align-self-end">{props.heart}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}