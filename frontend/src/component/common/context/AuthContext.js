import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const login = () => {
		setIsAuthenticated(true);
		localStorage.setItem('isAuthenticated', 'true'); // Store in local storage
	};

	const logout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem('isAuthenticated'); // Remove from local storage
	};

	// Check local storage for authentication state on initial render
	React.useEffect(() => {
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
