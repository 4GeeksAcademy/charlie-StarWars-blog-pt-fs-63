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
import { getImageFromName } from "../utils";

export const Home = () => {

	const navigate = useNavigate()
	const { actions, store } = useContext(Context)
	const peopleArray = Object.values(store.peopleData || {})
	const planetsArray = Object.values(store.planetsData || {})
	const vehiclesArray = Object.values(store.vehiclesData || {})
	const favArray = Object.values(store.favorites || {})

	const handlePersonDetail = async (id) => {
		const personId = await peopleArray.indexOf(peopleArray[id])
		navigate(`/personDetail/${personId}`)
	}
	const handlePlanetDetail = async (id) => {
		const planetId = await planetsArray.indexOf(planetsArray[id])
		navigate(`/planetDetail/${planetId}`)
	}
	const handleVehicleDetail = async (id) => {
		const vehicleId = await vehiclesArray.indexOf(vehiclesArray[id])
		navigate(`/vehicleDetail/${vehicleId}`)
	}


	const handleAddFavorite = (entity) => {
		actions.toFavorites(entity)
	}


	return (
		<IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "red", className: "global-class-name" }}>
			<div className="container">
				<div className="scroll mt-5 d-flex overflow-x-auto">
					{peopleArray.map((el, index) => (
						<PersonCard key={index} name={el.name} gender={el.gender} hairColor={el.hair_color}
							eyeColor={el.eye_color} onClick={() => handlePersonDetail(index)}
							toFavorites={() => handleAddFavorite(el.name)}
							heart={favArray.includes(el.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />}
							image={getImageFromName(el.name)} />
					))}
				</div>
				<div className="scroll mt-5 d-flex overflow-x-auto">
					{planetsArray.map((el, index) => (
						<PlanetCard key={index} name={el.name} population={el.population} terrain={el.terrain}
							toFavorites={() => handleAddFavorite(el.name)} onClick={() => handlePlanetDetail(index)}
							heart={favArray.includes(el.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />}
							image={getImageFromName(el.name)} />
					))}
				</div>
				<div className="scroll mt-5 d-flex overflow-x-auto mb-5">
					{vehiclesArray.map((el, index) => (
						<VehicleCard key={index} name={el.name} cost={el.cost_in_credits}
							speed={el.max_atmosphering_speed} toFavorites={() => handleAddFavorite(el.name)}
							onClick={() => handleVehicleDetail(index)}
							heart={favArray.includes(el.name) ? <GoHeartFill className="mb-1" /> : <GoHeart className="mb-1" />}
							image={getImageFromName(el.name)} />
					))}
				</div>
			</div>
		</IconContext.Provider>
	)
}

