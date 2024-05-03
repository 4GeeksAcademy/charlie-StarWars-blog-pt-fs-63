const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
				const planetsReq = await fetch(`https://www.swapi.tech/api/planets`)
				const planetsRes = await planetsReq.json().then(res => res.results)
				for (const planet of planetsRes) {
					getActions().getPlanet(planet.uid)
				}

				setStore({ planets: planetsRes })
			},
			getPlanet: async (id = 1) => {
				const planetReq = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				const planetRes = await planetReq.json().then(res => res.result.properties)

				const planetData = getStore().planetData
				planetData ? setStore({ planetData: { ...planetData, [id]: planetRes } }) : setStore({ planetData: { [id]: planetRes } })
				//console.log(getStore().planetData)
			},
			///////////////////////////////////////////////////////////////////////////////////////
			getVehicles: async () => {
				const vehiclesReq = await fetch(`https://www.swapi.tech/api/vehicles`)
				const vehiclesRes = await vehiclesReq.json()
				setStore({ vehicles: vehiclesRes })

				console.log(getStore().vehicles)
			},
		}
	};
};

export default getState;
