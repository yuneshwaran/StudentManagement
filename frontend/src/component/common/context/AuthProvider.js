import React, { createContext, useState, useContext, useEffect } from 'react';

import AuthConfig from './AuthConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (id, inputDob) => {
        try {
            const dobFromApi = await AuthConfig(id); 
            const formattedDobFromApi = dobFromApi.trim(); 

            if (formattedDobFromApi === inputDob) {

                setIsAuthenticated(true);
                localStorage.setItem('isAuthenticated', 'true');
            } else {
                console.log(inputDob);
                alert('Invalid credentials: DOB does not match');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); 
    };

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
