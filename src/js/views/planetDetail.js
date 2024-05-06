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
    const favArray = Object.values(store.favorites || {})
    const planetsArray = Object.values(store.planetsData || {})
    const person = planetsArray[id] || ""

    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "red", className: "global-class-name" }}>
            <div className="container">
                <div>
                    <h1 className="text-white">Hi</h1>
                    <h2 className="text-white">{planetsArray && `This is ${planetsArray[id]?.name}'s Detail`}</h2>
                </div>
            </div>
        </IconContext.Provider>
    )
}