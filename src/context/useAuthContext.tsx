    import { createContext, useContext } from "react";
    import type { IAuthContext } from "../types";

    export const AuthContext = createContext<IAuthContext | undefined>(undefined);

    export const useAuthContext = () => {
        const context = useContext(AuthContext);
        if (!context)
            throw new Error("useAuthContext must be used within AppProvider");
        return context;
    };
