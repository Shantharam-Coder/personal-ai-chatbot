import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "./AuthPage.css";

function AuthPage() {
    const [mode, setMode] = useState("login");
    const navigate = useNavigate(); // 2. Initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle API calls for login/signup
        console.log("Form submitted");

        // 3. Redirect to the landing page
        navigate("/landing");
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <h1 className="auth-heading">
                    {mode === "login" ? "Welcome Back" : "Create Account"}
                </h1>

                <p className="auth-text">
                    {mode === "login"
                        ? "Login to access your personal AI assistant"
                        : "Sign up to start building your personal AI assistant"}
                </p>

                {/* 4. Add the onSubmit handler */}
                <form className="auth-form" onSubmit={handleSubmit}>
                    {mode === "signup" && (
                        <input type="text" placeholder="Full Name" className="auth-input" required />
                    )}

                    <input type="email" placeholder="Email Address" className="auth-input" required />
                    <input type="password" placeholder="Password" className="auth-input" required />

                    <button type="submit" className="auth-submit">
                        {mode === "login" ? "Login" : "Sign Up"}
                    </button>
                </form>

                <div className="auth-footer">
                    {mode === "login" ? (
                        <span>
              Don’t have an account?
              <button type="button" onClick={() => setMode("signup")}> Sign up</button>
            </span>
                    ) : (
                        <span>
              Already have an account?
              <button type="button" onClick={() => setMode("login")}> Login</button>
            </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthPage;