import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
	const { id } = useParams();

	const [student, setStudent] = useState({
		name: "",
		email: "",
		department: "",
		dob: "",
		age: "",
		marks: "",
	});
	const [error, setError] = useState(null); // State for error handling
	const [loading, setLoading] = useState(true); // State for loading status

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		try {
			const result = await axios.get(`http://192.168.0.108:8080/api/student/${id}`);
			setStudent(result.data);
		} catch (error) {
			setError("Error loading student data."); // Set error message
			console.error("Error loading student:", error);
		} finally {
			setLoading(false); // Update loading status
		}
	};

	if (loading) {
		return <p>Loading...</p>; // Loading message
	}

	if (error) {
		return <p>{error}</p>; // Error message
	}

	return (
		<section className="shadow" style={{ backgroundColor: "whitesmoke", padding: "20px" }}>
			<div className="container py-5">
				<div className="card mb-4">
					<div className="card-body text-center">
						<h5 className="mb-4">Student Profile</h5>

						<div className="row mb-3">
							<div className="col-sm-4">
								<h5 className="mb-0">Full Name</h5>
							</div>
							<div className="col-sm-8">
								<p className="text-muted mb-0">{student.name}</p>
							</div>
						</div>

						<hr />

						<div className="row mb-3">
							<div className="col-sm-4">
								<h5 className="mb-0">Email</h5>
							</div>
							<div className="col-sm-8">
								<p className="text-muted mb-0">{student.email}</p>
							</div>
						</div>

						<hr />

						<div className="row mb-3">
							<div className="col-sm-4">
								<h5 className="mb-0">Department</h5>
							</div>
							<div className="col-sm-8">
								<p className="text-muted mb-0">{student.department}</p>
							</div>
						</div>

						<hr />

						<div className="row mb-3">
							<div className="col-sm-4">
								<h5 className="mb-0">Date of Birth</h5>
							</div>
							<div className="col-sm-8">
								<p className="text-muted mb-0">
									{new Date(student.dob).toLocaleDateString()}
								</p>
							</div>
						</div>

						<hr />

						<div className="row mb-3">
							<div className="col-sm-4">
								<h5 className="mb-0">Age</h5>
							</div>
							<div className="col-sm-8">
								<p className="text-muted mb-0">{student.age}</p>
							</div>
						</div>

						<hr />

						<div className="row mb-3">
							<div className="col-sm-4">
								<h5 className="mb-0">Marks</h5>
							</div>
							<div className="col-sm-8">
								<p className="text-muted mb-0">{student.marks}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentProfile;
