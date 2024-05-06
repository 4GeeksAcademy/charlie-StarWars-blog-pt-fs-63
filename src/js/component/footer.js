import React from "react";
import { MdEmojiFoodBeverage } from "react-icons/md";


export const Footer = () => (
	<footer className="footer bg-transparent text-light mt-auto py-3 text-center">
		<p className="fw-bold">
			Made with <MdEmojiFoodBeverage /> by{" "}
			<a className="link-offset-2 link-underline link-underline-opacity-0 link-warning" href="https://github.com/CWilloughby98">Charlie</a>
		</p>
	</footer>
);
