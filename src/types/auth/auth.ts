import type { LoginUserDTO, RegisterUserDTO } from "./auth.dto";

export interface IAuthContext {
    loginUser: (userData: LoginUserDTO) => Promise<void>;
    registerUser: (userData: RegisterUserDTO) => Promise<void>;
    authWithGoogle: () => void;
}
