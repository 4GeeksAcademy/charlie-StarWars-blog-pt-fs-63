import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PersonDetail = (props) => {

    const { actions, store } = useContext(Context)
    const { id } = useParams()

    const peopleArray = Object.values(store.peopleData || {})

    return (
        <div className="container">
            <div>
                <h1 className="text-white">Hi</h1>
                <h2 className="text-white">{peopleArray && `This is ${peopleArray[id]?.name}'s Detail`}</h2>
            </div>
        </div>
    )
}