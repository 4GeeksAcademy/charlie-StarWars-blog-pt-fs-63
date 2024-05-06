import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { getImageFromName } from "../utils";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IconContext } from "react-icons";

export const VehicleDetail = () => {

    const { actions, store } = useContext(Context)
    const { id } = useParams()
    const vehiclesArray = Object.values(store.vehiclesData || {})
    const favArray = Object.values(store.favorites || {})
    const vehicle = vehiclesArray[id] || ""
    const name = vehiclesArray[id]?.name

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
                                    <div className="border border-3 rounded laser" style={{ width: "20vw" }}></div>
                                </div>
                                <p className="card-text text-warning m-0">Model: <small className="text-light">{vehicle.model}</small></p>
                                <p className="card-text text-warning m-0">Class: <small className="text-light">{vehicle.vehicle_class}</small></p>
                                <p className="card-text text-warning m-0">Cost: <small className="text-light">{vehicle.cost_in_credits}</small></p>
                                <p className="card-text text-warning m-0">Passengers: <small className="text-light">{vehicle.passengers}</small></p>
                                <p className="card-text text-warning m-0">Max Speed: <small className="text-light">{vehicle.max_atmosphering_speed}</small></p>
                                <p className="card-text text-warning m-0">Cargo Capacity: <small className="text-light">{vehicle.cargo_capacity}</small></p>
                                <p className="card-text text-warning m-0">Description: <small className="text-light">A vehicle within the Star Wars universe</small></p>
                            </div>
                            <button onClick={() => actions.toFavorites(vehicle.name)} className="btn btn-light align-self-end">
                                {favArray.includes(vehicle.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}