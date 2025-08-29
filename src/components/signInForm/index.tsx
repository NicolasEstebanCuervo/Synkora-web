import styled from "@emotion/styled";
import { Link, MD } from "@styles/fonts";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useAuthContext } from "@context/useAuthContext";
import InputText from "@components/inputText";
import Button from "@components/button";

export default function SignInForm() {
    const { loginUser, authWithGoogle } = useAuthContext();

    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUser({ email: email, password: password });
        setEmail("");
        setPassword("");
    };

    return (
        <SignInFormContainer onSubmit={handleSubmit}>
            <InputText
                type="email"
                label="Email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <InputText
                type="password"
                label="Password"
                placeholder="Enter your password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
            />

            <Button type="submit" text="Sign In" />
            <Button
                onClick={authWithGoogle}
                text="Sign in Google"
                isGoogle={true}
            />

            <SignInFormActions>
                <Link href="/signup">Sign Up.</Link>
                <MD color={theme.colors.text.secondary}>
                    Don't have an account?
                </MD>
            </SignInFormActions>
        </SignInFormContainer>
    );
}

const SignInFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SignInFormActions = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    gap: 3px;
`;
