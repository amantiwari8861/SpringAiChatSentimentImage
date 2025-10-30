import { createContext, useState } from "react"

const AuthContext = createContext();
const AuthContextWrapper = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (email, password) => {
        setUser({
            name: "Aman Tiwari",
            image: "https://media.licdn.com/dms/image/v2/D5603AQF6Jg0zTVWBzQ/profile-displayphoto-scale_200_200/B56ZjazRsiH8Ac-/0/1756017532600?e=2147483647&v=beta&t=ZjjwETYcdYZ464B7MlBjEaAzoNvkmWwalikR8gYsnUE",
            email, password
        });
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextWrapper;
export { AuthContext }