import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";
import logo from "../../img/logo.png";


export const Navbar = () => {

	const { actions, store } = useContext(Context)
	console.log(store.favorites)

	return (
		<IconContext.Provider value={{ size: "1.2em", style: { verticalAlign: 'middle' }, className: "global-class-name" }}>
			<nav className="navbar navbar-dark flex-column bg-transparent pt-4 px-5">
				<div className="d-flex align-items-center">
					<div style={{ width: "25vw", border: "1px solid yellow" }}></div>
					<Link to="/">
						<img style={{ width: "20vw" }} src={logo} className="navbar-brand mx-4 h1" />
					</Link>
					<div style={{ width: "25vw", border: "1px solid yellow" }}></div>
				</div>
				<div className="dropend mt-3">
					<button className="btn btn-dark btn-outline-warning mx-auto dropdown-toggle" type="button" data-bs-toggle="dropdown">
						Favorites
					</button>
					<ul className="dropdown-menu p-0">
						<hr class="dropdown-divider"></hr>
						{store.favorites?.map((el, index) => (
							<li key={index} className="dropdown-item list-group-item">
								<div className="d-flex justify-content-between">
									<p className="m-0 ms-3 align-self-center">{el}</p>
									<button onClick={(e) => { actions.deleteFavorites(el), e.stopPropagation() }} className="btn"> <MdDelete className="mb-1" /> </button>
								</div>
								<hr class="dropdown-divider"></hr>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</IconContext.Provider>
	);
};
