import React from "react";

export const VehicleCard = (props) => {

    return (
        <div className="mx-auto me-3">
            <div className="card bg-secondary text-light" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/cobb-vanth-s-speeder-main_e26efd00.jpeg?region=329%2C1%2C951%2C536" className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "190px" }}>
                    <div>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text m-1">Cost: {props.cost}</p>
                        <p className="card-text m-1">Speed: {props.speed}</p>
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                        <button href="#" className="btn btn-primary">Read More</button>
                        <button onClick={props.toFavorites} className="btn btn-light">{props.heart}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}