import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { getImageFromName } from "../utils";

export const VehicleDetail = () => {

    const { actions, store } = useContext(Context)
    const { id } = useParams()

    const vehiclesArray = Object.values(store.vehiclesData || {})
    console.log(vehiclesArray[id])

    return (
        <div className="container">
            <div>
                <h1 className="text-white">Hi</h1>
                <h2 className="text-white">{vehiclesArray && `This is ${vehiclesArray[id]?.name}'s Detail`}</h2>
            </div>
        </div>
    )
}