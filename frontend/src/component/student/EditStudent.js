import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [student, setStudent] = useState({
        name: "", 
        email: "",
        department: "",
        dob: "", 
        age: "",  
        marks: "",  
    });

    const { name, email, department, dob, age, marks } = student;

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/student/${id}`);
            setStudent(result.data);
        } catch (error) {
            console.error("Error fetching student:", error);
        }
    };

    const handleInputChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/student/${id}`, {
                ...student,
            });
            navigate("/");
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Student with id : {id}</h2>
            <form onSubmit={updateStudent}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="department">
                        Department
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="department"
                        id="department"
                        required
                        value={department}
                        onChange={handleInputChange}
                    />
                </div>

                {/* <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="dob">
                        Date of Birth
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="date"
                        name="dob"
                        id="dob"
                        required
                        value={dob}
                        onChange={handleInputChange}
                    />
                </div> */}
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="age">
                        Age
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        name="age"
                        id="age"
                        value={age}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="marks">
                        Marks
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        name="marks"
                        id="marks"
                        value={marks}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg">
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={"/main"}
                            className="btn btn-outline-warning btn-lg">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;
