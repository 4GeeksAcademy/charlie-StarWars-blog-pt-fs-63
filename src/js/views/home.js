import React from "react";
import { PersonCard } from "../component/personCard";
import { PlanetCard } from "../component/planetCard";
import { VehicleCard } from "../component/vehicleCard";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IconContext } from "react-icons";


export const Home = () => {

	const navigate = useNavigate()
	const { actions, store } = useContext(Context)
	const peopleArray = Object.values(store.peopleData || {})
	const planetsArray = Object.values(store.planetsData || {})
	const vehiclesArray = Object.values(store.vehicles || {})
	const favArray = Object.values(store.favorites || {})

	const handleGetDetail = async (id) => {
		const personId = await peopleArray.indexOf(peopleArray[id])
		navigate(`/personDetail/${personId}`)
	}

	console.log(favArray)

	const handleAddFavorite = (entity) => {
		actions.toFavorites(entity)
	}


	return (
		<IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "magenta", className: "global-class-name" }}>
			<div className="container">
				<div className="scroll mt-5 d-flex overflow-x-auto">
					{peopleArray.map((el, index) => (
						<PersonCard key={index} name={el.name} gender={el.gender} hairColor={el.hair_color}
							eyeColor={el.eye_color} onClick={() => handleGetDetail(index)}
							toFavorites={() => handleAddFavorite(el.name)}
							heart={favArray.includes(el.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />} />
					))}
				</div>
				<div className="scroll mt-5 d-flex overflow-x-auto">
					{planetsArray.map((el, index) => (
						<PlanetCard key={index} name={el.name} population={el.population} terrain={el.terrain}
							toFavorites={() => handleAddFavorite(el.name)}
							heart={favArray.includes(el.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />} />
					))}
				</div>
				<div className="scroll mt-5 d-flex overflow-x-auto mb-5">
					{vehiclesArray.map((el, index) => (
						<VehicleCard key={index} name={el.name} cost={el.cost_in_credits}
							Speed={el.max_atmosphering_speed}
							toFavorites={() => handleAddFavorite(el.name)}
							heart={favArray.includes(el.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />} />
					))}
				</div>
			</div>
		</IconContext.Provider>
	)
}

