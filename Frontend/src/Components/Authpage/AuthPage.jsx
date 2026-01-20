import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "./AuthPage.css";

function AuthPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formKey = location.pathname + mode;

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        resetForm();
    }, [location.pathname, mode]);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (data.session) {
                navigate("/landing", { replace: true });
            }
        });
    }, []);

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            resetForm();
            navigate("/landing", { replace: true });
        }
    };

    const handleSignup = async () => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            resetForm();
            navigate("/landing", { replace: true });
        }
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

                <form
                    key={formKey}
                    className="auth-form"
                    autoComplete="off"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input type="text" name="fake-user" style={{ display: "none" }} />
                    <input
                        type="password"
                        name="fake-pass"
                        style={{ display: "none" }}
                    />

                    {mode === "signup" && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="auth-input"
                            autoComplete="off"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="auth-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="auth-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                    />

                    <button
                        type="button"
                        className="auth-submit"
                        onClick={mode === "login" ? handleLogin : handleSignup}
                    >
                        {mode === "login" ? "Login" : "Sign Up"}
                    </button>
                </form>

                <div className="auth-footer">
                    {mode === "login" ? (
                        <span>
              Don’t have an account?
              <button
                  type="button"
                  onClick={() => {
                      resetForm();
                      setMode("signup");
                  }}
              >
                Sign up
              </button>
            </span>
                    ) : (
                        <span>
              Already have an account?
              <button
                  type="button"
                  onClick={() => {
                      resetForm();
                      setMode("login");
                  }}
              >
                Login
              </button>
            </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
