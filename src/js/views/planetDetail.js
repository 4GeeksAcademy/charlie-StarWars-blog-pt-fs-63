import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { getImageFromName } from "../utils";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IconContext } from "react-icons";

export const PlanetDetail = () => {

    const { actions, store } = useContext(Context)
    const { id } = useParams()
    const planetsArray = Object.values(store.planetsData || {})
    const favArray = Object.values(store.favorites || {})
    const planet = planetsArray[id] || ""
    const name = planetsArray[id]?.name

    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "red", className: "global-class-name" }}>
            <div className="container py-2 my-5">
                <div className="card text-white bg-dark">
                    <div className="g-0 row">
                        <div className="col-12 col-lg-8">
                            <img style={{ height: "100%" }} src={getImageFromName(name)} alt="..."
                                className="img-fluid w-100 rounded-start detail-img" />
                        </div>
                        <div className="col-lg-4 d-flex flex-column p-3">
                            <div className="card-body p-4">
                                <h2 className="card-title fw-bold font-monospace">{name}</h2>
                                <div className="mb-2 position-relative d-flex align-items-center">
                                    <div className="border border-4 border-black position-absolute" style={{ width: "2px", zIndex: "1" }}></div>
                                    <div className="border border-4 rounded border-secondary position-absolute" style={{ width: "5vw" }}></div>
                                    <div className="border border-3 rounded border-success" style={{ width: "20vw" }}></div>
                                </div>
                                <p className="card-text text-warning m-0">Diameter: <small className="text-light">{planet.diameter}</small></p>
                                <p className="card-text text-warning m-0">Gravity: <small className="text-light">{planet.gravity}</small></p>
                                <p className="card-text text-warning m-0">Population: <small className="text-light">{planet.population}</small></p>
                                <p className="card-text text-warning m-0">Climate: <small className="text-light">{planet.climate}</small></p>
                                <p className="card-text text-warning m-0">Terrain: <small className="text-light">{planet.terrain}</small></p>
                                <p className="card-text text-warning m-0">Description: <small className="text-light">A planet within the Star Wars universe</small></p>
                            </div>
                            <button onClick={() => actions.toFavorites(planet.name)} className="btn btn-light align-self-end">
                                {favArray.includes(planet.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}