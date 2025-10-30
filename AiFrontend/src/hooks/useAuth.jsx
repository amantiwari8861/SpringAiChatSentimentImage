import { useContext } from "react"
import { AuthContext } from "../context/AuthContextWrapper"

const useAuth = () => {
    const context = useContext(AuthContext);

    // ✅ Validate hook usage
    if (!context) {
        throw new Error("❌ useAuth must be used within an AuthProvider");
    }

    const { user, login, logout } = context;

    // ✅ Optional: Validate user object
    const isAuthenticated = !!user && !!user.email; // can adjust condition

    const validateUser = () => {
        if (!user) return { valid: false, reason: "User not logged in" };
        if (!user.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(user.email)) {
            return { valid: false, reason: "Invalid email format" };
        }
        return { valid: true };
    };

    return {
        user,
        login,
        logout,
        isAuthenticated,
        validateUser,
    };
};

export default useAuth;
