import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Search from "../common/Search";
import NavBar from '../common/NavBar';

const MainPage = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadStudents();
    }, []);



    const loadStudents = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/student", {
                validateStatus: () => true,  
            });
 

            if (result.status === 200) {
                const formattedStudents = result.data.map((student) => ({
                    id: student.id,
                    fullName: student.name,
                    email: student.email,
                    dob: new Date(student.dob).toLocaleDateString(), 
                    department: student.department ,
                    age: student.age,
                    marks: student.marks,
                }));
                setStudents(formattedStudents);
            } else {
                console.error("Unexpected status code:", result.status);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/student/${id}`);
        loadStudents();
    };

    return (
        <section>
            <NavBar/>
            <Search search={search} setSearch={setSearch} />
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>DOB (MM-DD-YYYY)</th>
                        <th>Dept</th>
                        <th>Marks</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {students
                        .filter((st) =>
                            st.fullName.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((student, index) => (
                            <tr key={student.id}>
                                <th>{student.id}</th>
                                <td>{student.fullName}</td>
                                <td>{student.email}</td>
                                <td>{student.dob}</td> 
                                <td>{student.department}</td>
                                <td>{student.marks}</td>
                                <td className="mx-2">
                                    <Link to={`/view-student/${student.id}`} className="btn btn-info">
                                        <FaEye />
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <Link to={`/edit-student/${student.id}`} className="btn btn-warning">
                                        <FaEdit />
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
};

export default MainPage;
