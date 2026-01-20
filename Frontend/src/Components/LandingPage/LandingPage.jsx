import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="landing-container">
            {/* Navbar */}
            <nav className="landing-navbar">
                <h1 className="landing-logo">PersonalAI</h1>
                <button className="landing-logout">Logout</button>
            </nav>

            {/* Main content */}
            <main className="landing-content">
                <h2>Your AI, Your Space</h2>
                <p>
                    This is your personal AI workspace.
                    Think, plan, learn, and build — all in one place.
                </p>

                <button className="start-chat-btn">
                    Go to Chatbot →
                </button>
            </main>
        </div>
    );
}

export default LandingPage;
