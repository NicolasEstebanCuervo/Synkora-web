    import { createContext, useContext } from "react";
    import type { ITaskContext } from "../types";

    export const TaskContext = createContext<ITaskContext | undefined>(undefined);

    export const useTaskContext = () => {
        const context = useContext(TaskContext);
        if (!context)
            throw new Error("useTaskContext must be used within AppProvider");
        return context;
    };
