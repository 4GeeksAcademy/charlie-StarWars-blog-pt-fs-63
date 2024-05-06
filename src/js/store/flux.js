const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			getPeople: async () => {
				const people = localStorage.getItem("people")
				if (people) {
					for (const person of JSON.parse(people)) {
						getActions().getPerson(person.uid)
					}
					setStore({ people: JSON.parse(people) })
				} else {
					const peopleReq = await fetch(`https://www.swapi.tech/api/people/`)
					const peopleRes = await peopleReq.json().then(res => res.results)
					for (const person of peopleRes) {
						await getActions().getPerson(person.uid)
					}
					setStore({ people: peopleRes })
					localStorage.setItem("people", JSON.stringify(peopleRes))
				}
			},
			getPerson: async (id = 1) => {
				const person = localStorage.getItem(`person-${id}`)
				const peopleData = getStore().peopleData
				if (person) {
					setStore({ peopleData: { ...peopleData, [id]: JSON.parse(person) } })
				} else {
					const personReq = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const personRes = await personReq.json().then(res => res.result.properties)

					setStore({ peopleData: { ...peopleData, [id]: personRes } })
					localStorage.setItem(`person-${id}`, JSON.stringify(personRes))
				}
			},
			///////////////////////////////////////////////////////////////////////////////////////
			getPlanets: async () => {
				const planets = localStorage.getItem("planets")
				if (planets) {
					for (const planet of JSON.parse(planets)) {
						getActions().getPlanet(planet.uid)
					}
					setStore({ planets: JSON.parse(planets) })
				} else {
					const planetsReq = await fetch(`https://www.swapi.tech/api/planets`)
					const planetsRes = await planetsReq.json().then(res => res.results)
					for (const planet of planetsRes) {
						await getActions().getPlanet(planet.uid)
					}
					setStore({ planets: planetsRes })
					localStorage.setItem("planets", JSON.stringify(planetsRes))
				}
			},
			getPlanet: async (id = 1) => {
				const planet = localStorage.getItem(`planet-${id}`)
				const planetsData = getStore().planetsData
				if (planet) {
					setStore({ planetsData: { ...planetsData, [id]: JSON.parse(planet) } })
				} else {
					const planetReq = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					const planetRes = await planetReq.json().then(res => res.result.properties)

					setStore({ planetsData: { ...planetsData, [id]: planetRes } })
					localStorage.setItem(`planet-${id}`, JSON.stringify(planetRes))
				}
			},
			///////////////////////////////////////////////////////////////////////////////////////
			getVehicles: async () => {
				const vehicles = localStorage.getItem("vehicles")
				if (vehicles) {
					for (const vehicle of JSON.parse(vehicles)) {
						getActions().getVehicle(vehicle.uid)
					}
					setStore({ vehicles: JSON.parse(vehicles) })
				} else {
					const vehiclesReq = await fetch(`https://www.swapi.tech/api/vehicles`)
					const vehiclesRes = await vehiclesReq.json().then(res => res.results)
					for (const vehicle of vehiclesRes) {
						await getActions().getVehicle(vehicle.uid)
					}
					setStore({ vehicles: vehiclesRes })
					localStorage.setItem("vehicles", JSON.stringify(vehiclesRes))
				}
			},
			getVehicle: async (id = 4) => {
				const vehicle = localStorage.getItem(`vehicle-${id}`)
				const vehiclesData = getStore().vehiclesData
				if (vehicle) {
					setStore({ vehiclesData: { ...vehiclesData, [id]: JSON.parse(vehicle) } })
				} else {
					const vehicleReq = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					const vehicleRes = await vehicleReq.json().then(res => res.result.properties)

					setStore({ vehiclesData: { ...vehiclesData, [id]: vehicleRes } })
					localStorage.setItem(`vehicle-${id}`, JSON.stringify(vehicleRes))
				}
			},
			///////////////////////////////////////////////////////////////////////////////////////
			getFavorites: () => {
				const favorites = localStorage.getItem(`favorites`)
				favorites && setStore({ favorites: JSON.parse([favorites]) })
			},
			toFavorites: async (item) => {
				const favArray = getStore().favorites || []
				await setStore(!favArray.includes(item) && { favorites: [...favArray, item] })
				localStorage.setItem(`favorites`, JSON.stringify(getStore().favorites))
			},
			deleteFavorites: (item) => {
				const favArray = getStore().favorites || []
				const filteredFav = favArray.filter(el => el !== item)
				setStore({ favorites: [...filteredFav] })
				localStorage.setItem(`favorites`, JSON.stringify(getStore().favorites))
			}
		}
	};
};

export default getState;
