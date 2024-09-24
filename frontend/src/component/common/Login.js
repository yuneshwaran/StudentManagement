import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isStaffMode, setIsStaffMode] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const apifetch = isStaffMode
                ? `http://localhost:8080/api/login/staff/${username}`
                : `http://localhost:8080/api/login/student/${username}`;
    
            const response = await fetch(apifetch);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const key = await response.text(); 
         
          //API call
            if (isStaffMode) {
                if (key === password) { //staff login check 
                    navigate('/main');
                } else {
                    alert('Invalid staff credentials.');
                }
            } else {
                const dob = key; 
                if (dob === password) { //student login check
                    navigate(`/view-student/${username}`);
                } else {
                    alert('Invalid student credentials or DOB.');
                }
            }
        } 
        
        catch (error) {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <h2 className="mb-4 text-center">Login</h2>
                <div className="mb-3">
                    <label className="form-label">Login ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Login ID"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={isStaffMode ? "Enter Password" : "[dd-MM-yyyy]"}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isStaffMode}
                        onChange={() => setIsStaffMode(!isStaffMode)}
                    />
                    <label className="form-check-label">
                        {isStaffMode ? 'Check for Staff Login' : 'Check for Staff Login'}
                    </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};

export default Login;
