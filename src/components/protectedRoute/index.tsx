import type React from "react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged, type User } from "firebase/auth";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsusbscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsusbscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? children : <Navigate to="/signin" />;
}
