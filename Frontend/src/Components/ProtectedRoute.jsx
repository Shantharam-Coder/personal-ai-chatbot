import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ProtectedRoute({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get current session
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setLoading(false);
        });

        // Listen for auth changes
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    if (loading) return null;

    if (!session) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
