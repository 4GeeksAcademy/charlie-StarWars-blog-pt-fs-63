import React from "react";
import { IconContext } from "react-icons";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export const VehicleCard = (props) => {
    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "magenta", className: "global-class-name" }}>
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
                            <button onClick={props.toFavorites} className="btn btn-light">{<GoHeart className="mb-1" />}</button>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider >
    )
}