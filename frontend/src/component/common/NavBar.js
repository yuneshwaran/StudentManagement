import React from "react";
import { Link , useNavigate } from "react-router-dom";


const NavBar = () => {

	let navigate = useNavigate();

	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid">
				<div className="navbar-brand" to={'/main'}>
					Student Management
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								to={"/add-students"}>
								Add New Student
							</Link>
						</li>
					</ul>
					<button className="btn btn-outline-light ms-auto" onClick={() => navigate('/')} >
						Logout
					</button>
				</div>
			</div>
		</nav>

		</>
	);
};

export default NavBar;




 