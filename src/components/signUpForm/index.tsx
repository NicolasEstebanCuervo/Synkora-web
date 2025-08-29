import styled from "@emotion/styled";
import { Link, MD } from "@styles/fonts";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useAuthContext } from "@context/useAuthContext";
import InputText from "@components/inputText";
import Button from "@components/button";

export default function SignUpForm() {
    const theme = useTheme();
    const { registerUser, authWithGoogle } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerUser({ email: email, password: password });
        setEmail("");
        setPassword("");
    };

    return (
        <SignUpFormContainer onSubmit={handleSubmit}>
            <InputText
                type="email"
                label="Email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                minLength={15}
                maxLength={50}
            />
            <InputText
                type="password"
                label="Password"
                placeholder="Enter your password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
                minLength={10}
                maxLength={50}
            />

            <Button type="submit" text="Sign Up" />
            <Button
                onClick={authWithGoogle}
                text="Sign up Google"
                isGoogle={true}
            />

            <SignUpFormActions>
                <Link href="/signin">Sign In.</Link>
                <MD color={theme.colors.text.secondary}>
                    Already have an account?
                </MD>
            </SignUpFormActions>
        </SignUpFormContainer>
    );
}

const SignUpFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SignUpFormActions = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    gap: 3px;
`;
