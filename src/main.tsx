import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { css, Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/color";
import TaskProvider from "@context/taskContext.tsx";
import AuthProvider from "@context/authContext.tsx";
import ErrorProvider from "@context/errorContext.tsx";
import App from "./App";

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Space Grotesk", sans-serif;
    }
`;

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ErrorProvider>
                <AuthProvider>
                    <TaskProvider>
                        <ThemeProvider theme={theme}>
                            <Global styles={globalStyles} />
                            <App />
                        </ThemeProvider>
                    </TaskProvider>
                </AuthProvider>
            </ErrorProvider>
        </BrowserRouter>
    </StrictMode>
);
