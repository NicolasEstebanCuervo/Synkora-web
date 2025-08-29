    import { createContext, useContext } from "react";
    import type { IErrorContext } from "../types";

    export const ErrorContext = createContext<IErrorContext | undefined>(undefined);

    export const useErrorContext = () => {
        const context = useContext(ErrorContext);
        if (!context)
            throw new Error("useErrorContext must be used within AppProvider");
        return context;
    };
