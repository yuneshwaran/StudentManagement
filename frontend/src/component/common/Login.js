import React, { useState } from 'react';
import { useAuth } from './context/AuthProvider';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = username; 
        const inputDob = password;

        await login(id, inputDob); 

        if (localStorage.getItem('isAuthenticated') === 'true') {
            window.location.href = '/'; 
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
                        type="text" 
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
