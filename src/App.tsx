import { Route, Routes } from "react-router-dom";
import Layout from "@pages/layout";
import HomePage from "@pages/home";
import SignInPage from "@/pages/signIn";
import SignUpPage from "@/pages/signUp";
import TaskCreatePage from "@pages/taskCreate";
import NotFoundPage from "@pages/notFound";
import ProtectedRoute from "@components/protectedRoute";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/tasks/create" element={<TaskCreatePage />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
