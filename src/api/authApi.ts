import type {
    AuthResponseDTO,
    LoginUserDTO,
    AuthUserWithGoogleDTO,
    RegisterUserDTO,
} from "@/types/auth/auth.dto";
import { apiFetch } from "./apiClient";

export const authApi = {
    register: async (userData: RegisterUserDTO): Promise<AuthResponseDTO> => {
        const res = await apiFetch<AuthResponseDTO>(
            "http://localhost:1234/auth/register",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            }
        );
        return res;
    },

    login: async (userData: LoginUserDTO): Promise<AuthResponseDTO> => {
        const res = await apiFetch<AuthResponseDTO>(
            "http://localhost:1234/auth/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            }
        );
        return res;
    },

    authWithGoogle: async (userData: AuthUserWithGoogleDTO): Promise<AuthResponseDTO> => {
        const res = await apiFetch<AuthResponseDTO>(
            "http://localhost:1234/auth/google",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            }
        );
        return res;
    },
};
