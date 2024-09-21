import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthProvider"; // Import the Auth context

const NavBar = () => {
	const { logout } = useAuth(); // Get the logout function

	const handleLogout = () => {
		logout(); // Call the logout function
		window.location.href = '/login'; // Redirect to the login page
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" to={"/"}>
					Student Management
				</Link>
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
								className="nav-link active"
								aria-current="page"
								to={"/"}>
								View All Students
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to={"/add-students"}>
								Add New Student
							</Link>
						</li>
					</ul>
					<button className="btn btn-outline-light ms-auto" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;






// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
// 			<div className="container-fluid">
// 				<Link className="navbar-brand" to={"/"}>
// 					Student Management
// 				</Link>
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-bs-toggle="collapse"
// 					data-bs-target="#navbarNav"
// 					aria-controls="navbarNav"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation">
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div
// 					className="collapse navbar-collapse"
// 					id="navbarNav">
// 					<ul className="navbar-nav">
// 						<li className="nav-item">
// 							<Link
// 								className="nav-link active"
// 								aria-current="page"
// 								to={"/view-students"}>
// 								View All Student
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link
// 								className="nav-link"
// 								to={"/add-students"}>
// 								Add new Students
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default NavBar;
