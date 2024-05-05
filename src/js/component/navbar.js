import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";

export const Navbar = () => {

	const { actions, store } = useContext(Context)

	console.log(store.favorites)


	return (
		<IconContext.Provider value={{ size: "1.2em", style: { verticalAlign: 'middle' }, className: "global-class-name" }}>
			<nav className="navbar navbar-dark bg-secondary mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites?.map((el, index) => (
								<li key={index} className="dropdown-item">
									<div className="d-flex justify-content-between">
										<p className="m-0 align-self-center">{el.name}</p>
										<button onClick={() => actions.deleteFavorites(el)} className="btn"> <MdDelete className="mb-1" /> </button>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</IconContext.Provider>
	);
};
