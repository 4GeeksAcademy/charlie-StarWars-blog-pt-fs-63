import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { getImageFromName } from "../utils";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IconContext } from "react-icons";

export const PersonDetail = () => {

    const { actions, store } = useContext(Context)
    const peopleArray = Object.values(store.peopleData || {})
    const planetsArray = Object.values(store.planetsData || {})
    const favArray = Object.values(store.favorites || {})
    const { id } = useParams()
    const person = peopleArray[id] || ""
    const name = peopleArray[id]?.name


    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "red", className: "global-class-name" }}>
            <div className="container py-2 my-5">
                <div className="card text-white bg-dark">
                    <div className="g-0 row">
                        <div className="col-12 col-md-10 col-lg-8">
                            <img style={{ height: "100%" }} src={getImageFromName(name)} alt="..."
                                className="img-fluid w-100 rounded-start detail-img" />
                        </div>
                        <div className="col-lg-4 d-flex flex-column p-3">
                            <div className="card-body p-4">
                                <h2 className="card-title fw-bold font-monospace">{name}</h2>
                                <div className="mb-2 position-relative d-flex align-items-center">
                                    <div className="border border-4 border-black position-absolute" style={{ width: "2px", zIndex: "1" }}></div>
                                    <div className="border border-4 rounded border-secondary position-absolute" style={{ width: "5vw" }}></div>
                                    <div className="border border-3 rounded border-danger" style={{ width: "20vw" }}></div>
                                </div>
                                <p className="card-text text-warning m-0">Gender: <small className="text-light">{person.gender}</small></p>
                                <p className="card-text text-warning m-0">Birth Year: <small className="text-light">{person.birth_year}</small></p>
                                <p className="card-text text-warning m-0">Height: <small className="text-light">{person.height}</small></p>
                                <p className="card-text text-warning m-0">Hair Color: <small className="text-light">{person.hair_color}</small></p>
                                <p className="card-text text-warning m-0">Eye Color: <small className="text-light">{person.eye_color}</small></p>
                                <p className="card-text text-warning m-0">Skin Color: <small className="text-light">{person.skin_color}</small></p>
                                <p className="card-text text-warning m-0">Homeworld: <small className="text-light">{planetsArray[person.homeworld?.slice(-1) - 1]?.name}</small></p>
                                <p className="card-text text-warning m-0">Description: <small className="text-light">A person within the Star Wars universe</small></p>
                            </div>
                            <button onClick={() => actions.toFavorites(person.name)} className="btn btn-light align-self-end">
                                {favArray.includes(person.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}