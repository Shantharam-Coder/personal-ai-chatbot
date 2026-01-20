import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "./LandingPage.css";

function LandingPage() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };

    return (
        <div className="chat-page">
            {/* Top Navbar */}
            <nav className="chat-navbar">
                <h1 className="chat-logo">PersonalAI</h1>
                <button className="chat-logout" onClick={handleLogout}>
                    Logout
                </button>
            </nav>

            {/* Chat Area */}
            <div className="chat-container">
                <div className="chat-messages">
                    <div className="message ai-message">
                        👋 Hi! I’m your personal AI assistant.
                        Ask me anything.
                    </div>

                    <div className="message user-message">
                        Hello AI 👋
                    </div>
                </div>

                {/* Input Area */}
                <div className="chat-input-area">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="chat-input"
                    />
                    <button className="send-btn">Send</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
