import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase.js";

function LandingPage() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();   // 🔥 clears session
        navigate("/");
    };

    return (
        <div className="landing-container">
            <nav className="landing-navbar">
                <h1 className="landing-logo">PersonalAI</h1>
                <button className="landing-logout" onClick={handleLogout}>
                    Logout
                </button>
            </nav>

            <main className="landing-content">
                <h2>Your AI, Your Space</h2>
                <p>Welcome to your personal AI workspace.</p>
            </main>
        </div>
    );
}

export default LandingPage;
