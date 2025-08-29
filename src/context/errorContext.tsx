import { useState, type ReactNode } from "react";
import { ErrorContext } from "./useErrorContext";
import type { ErrorState } from "../types";

export default function ErrorProvider({ children }: { children: ReactNode }) {
    const [error, setError] = useState<ErrorState | null>(null);

    function showError(message: string) {
        setError({ message, active: true });

        setTimeout(() => {
            setError(null);
        }, 5000);
    }

    return (
        <ErrorContext.Provider value={{ error, showError }}>
            {children}
        </ErrorContext.Provider>
    );
}
