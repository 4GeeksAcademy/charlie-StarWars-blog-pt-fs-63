import React from "react";

export const PlanetCard = (props) => {
    return (
        <div className="mx-auto me-3">
            <div className="card bg-secondary text-light" style={{ width: "18rem" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720" className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "190px" }}>
                    <div>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text m-1">Population: {props.population}</p>
                        <p className="card-text m-1">Terrain: {props.terrain}</p>
                    </div>
                    <a href="#" className="btn btn-primary align-self-end">Read More</a>
                </div>
            </div>
        </div>
    )
}