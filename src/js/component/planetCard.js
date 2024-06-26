import React from "react";

export const PlanetCard = (props) => {


    return (
        <div className="mx-auto me-3">
            <div className="card bg-dark border-dark text-light" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "190px" }}>
                    <div>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text m-1">Population: {props.population}</p>
                        <p className="card-text m-1">Terrain: {props.terrain}</p>
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                        <button onClick={props.onClick} href="#" className="btn btn-warning align-self-end">Read More</button>
                        <button onClick={props.toFavorites} className="btn btn-light align-self-end">{props.heart}</button>
                    </div>
                </div>
            </div>
        </div >

    )
}