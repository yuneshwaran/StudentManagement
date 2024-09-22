
const AuthConfig = async (id) => {
    const response = await fetch(`http://localhost:8080/api/login/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const dob = await response.text(); 
    return dob;
};

export default AuthConfig;
