import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        id :"",
        name: "",  
        email: "",
        department: "",
        dob: "",  
        age: "",  
        marks: "", 
    });

    const { id,name, email, department, dob, age, marks } = student;

    const handleInputChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const saveStudent = async (e) => {
        e.preventDefault();
       
        try {
            await axios.post("http://localhost:8080/api/student", {
                id,
                name, 
                email,
                department,
                dob, 
                age, 
                marks, 
            });
            navigate("/main");
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Add Student</h2>
            <form onSubmit={saveStudent}>

            {/* <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="name">
                        Student Id
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        name="id"
                        id="id"
                        required
                        value={id}
                        onChange={handleInputChange}
                    />
                </div> */}

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

                <div className="input-group mb-5">
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
                </div>

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
                            className="btn btn-outline-success btn-lg"
                        >
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={"/main"}
                            className="btn btn-outline-warning btn-lg"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
