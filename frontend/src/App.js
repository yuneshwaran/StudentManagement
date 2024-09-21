import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import StudentProfile from "./component/student/StudentPofile";
import EditStudent from "./component/student/EditStudent";
import AddStudent from "./component/student/AddStudent";
import Login from "./component/common/Login";

import { AuthProvider, useAuth } from "./component/common/context/AuthProvider"; // Import Auth context

function App() {
	return (
		<AuthProvider>
			<Main />
		</AuthProvider>
	);
}

const Main = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Router>
			{isAuthenticated ? (
				<MainApp />
			) : (
				<Login />
			)}
		</Router>
	);
};

const MainApp = () => {
	return (
		<main className="container mt-5">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<StudentsView />} />
				<Route exact path="/add-students" element={<AddStudent />} />
				<Route exact path="/edit-student/:id" element={<EditStudent />} />
				<Route exact path="/student-profile/:id" element={<StudentProfile />} />
			</Routes>
		</main>
	);
};

export default App;
















// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "./App.css";

// import StudentsView from "./component/student/StudentsView";
// import NavBar from "./component/common/NavBar";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// } from "react-router-dom";
// import AddStudent from "./component/student/AddStudent";
// import EditStudent from "./component/student/EditStudent";
// import StudentPofile from "./component/student/StudentPofile";

// function App() {
// 	return (
// 		<main className="container mt-5">
// 			<Router>
// 				<NavBar />
// 				<Routes>
// 					<Route
// 						exact
// 						path="/"
// 						element={<StudentsView />}></Route>
// 					<Route
// 						exact
// 						path="/add-students"
// 						element={<AddStudent />}></Route>
// 					<Route
// 						exact
// 						path="/edit-student/:id"
// 						element={<EditStudent />}></Route>
// 					<Route
// 						exact
// 						path="/student-profile/:id"
// 						element={<StudentPofile />}></Route>
// 				</Routes>
// 			</Router>
// 		</main>
// 	);
// }

// export default App;
