export interface LoginUserDTO {
    email: string;
    password: string;
}

export interface RegisterUserDTO {
    email: string;
    password: string;
}

export interface AuthUserWithGoogleDTO {
    uid: string;
    email?: string;
}

export interface AuthResponseDTO {
    token: string;
}
