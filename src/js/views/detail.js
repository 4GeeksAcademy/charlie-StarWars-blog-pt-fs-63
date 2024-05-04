import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Detail = (props) => {

    const { actions, store } = useContext(Context)
    const { id } = useParams()
    const [data, setData] = useState(null)

    const handleGetDetail = async () => {
        const peopleArray = await Object.values(store.peopleData || {})
        const planetsArray = await Object.values(store.planetsData || {})
        const vehiclesArray = await Object.values(store.vehicles || {})
        await setData({
            people: peopleArray,
            planets: planetsArray,
            vehicles: vehiclesArray
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            handleGetDetail()
        }
        fetchData()
    }, [])


    console.log(store)
    return (
        <div className="container">
            <div>
                <h1 className="text-white">Hi</h1>
                <h2 className="text-white">{data && `This is ${data.people[id].name}'s Detail`}</h2>
            </div>
        </div>
    )
}