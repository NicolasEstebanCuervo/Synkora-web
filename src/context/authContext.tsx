import { useNavigate } from "react-router-dom";
import { AuthContext } from "./useAuthContext";
import { type ReactNode } from "react";
import {
    getAdditionalUserInfo,
    signInWithCustomToken,
    signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useErrorContext } from "./useErrorContext";
import { authApi } from "@api/authApi";
import type { LoginUserDTO, RegisterUserDTO } from "@/types/auth/auth.dto";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { showError } = useErrorContext();

    const registerUser = async (userData: RegisterUserDTO) => {
        try {
            const data = await authApi.register({
                email: userData.email,
                password: userData.password,
            });
            await signInWithCustomToken(auth, data.token);
            navigate("/");
        } catch (error) {
            showError((error as Error).message);
        }
    };

    const loginUser = async (userData: LoginUserDTO) => {
        try {
            const data = await authApi.login({
                email: userData.email,
                password: userData.password,
            });
            await signInWithCustomToken(auth, data.token);

            navigate("/");
        } catch (error) {
            showError((error as Error).message);
        }
    };

    const authWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const isNewUser = getAdditionalUserInfo(result)?.isNewUser;

            if (isNewUser) {
                await authApi.authWithGoogle({
                    uid: user.uid,
                    email: user.email || undefined,
                });
            }

            navigate("/");
        } catch (error) {
            showError((error as Error).message);
        }
    };

    return (
        <AuthContext.Provider
            value={{ registerUser, loginUser, authWithGoogle }}
        >
            {children}
        </AuthContext.Provider>
    );
}
