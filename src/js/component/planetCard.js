import React from "react";
import { IconContext } from "react-icons";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export const PlanetCard = (props) => {
    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "magenta", className: "global-class-name" }}>
            <div className="mx-auto me-3">
                <div className="card bg-secondary text-light" style={{ width: "18rem" }}>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720" className="card-img-top" />
                    <div className="card-body d-flex flex-column justify-content-between" style={{ height: "190px" }}>
                        <div>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text m-1">Population: {props.population}</p>
                            <p className="card-text m-1">Terrain: {props.terrain}</p>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button href="#" className="btn btn-primary align-self-end">Read More</button>
                            <button onClick={props.toFavorites} className="btn btn-light align-self-end">{<GoHeart className="mb-1" />}</button>
                        </div>
                    </div>
                </div>
            </div >
        </IconContext.Provider >
    )
}