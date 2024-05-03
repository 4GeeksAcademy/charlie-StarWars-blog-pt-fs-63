import React from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { useContext, useState } from "react";


export const Home = () => {

	const { actions, store } = useContext(Context)
	const peopleArray = Object.values(store.peopleData || {})

	console.log(peopleArray)

	return (
		<div className="mt-5 d-flex overflow-x-auto">
			{peopleArray.map((el, index) => (
				<Card key={index} name={el.name} gender={el.gender} hairColor={el.hair_color}
					eyeColor={el.eye_color} />
			))}
		</div>
	)
}

