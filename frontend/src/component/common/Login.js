import React, { useState } from 'react';
import { useAuth } from './context/AuthProvider'; // Adjust the path as necessary

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); // This will hold the DOB
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = username; // Staff ID
        const inputDob = password; // DOB from input

        await login(id, inputDob); // Pass both ID and DOB

        if (localStorage.getItem('isAuthenticated') === 'true') {
            window.location.href = '/'; // Redirect if authenticated
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <h2 className="mb-4">Login</h2>
                <div className="mb-3">
                    <label className="form-label">Staff ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Staff ID"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">DOB [dd-mm-yyyy]</label>
                    <input
                        type="text" // Text input for DOB
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter DOB"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};

export default Login;
