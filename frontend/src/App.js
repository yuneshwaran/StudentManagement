import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import Login from "./component/common/Login";
import MainPage from "./component/student/MainPage";
import StudentProfile from "./component/student/StudentPofile";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<Routes>
				<Route
						exact
						path="/"
						element={<Login />}></Route>
					<Route
						exact
						path="/main"
						element={<MainPage />}></Route>
					<Route
						exact
						path="/add-students"
						element={<AddStudent />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditStudent />}></Route>
					<Route
						exact
						path="/view-student/:id"
						element={<StudentProfile />}></Route>

				</Routes>
			</Router>
		</main>
	);
}

export default App;
