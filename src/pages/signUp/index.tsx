import styled from "@emotion/styled";
import SignupForm from "@/components/signUpForm";
import { XL } from "@styles/fonts";

export default function SignUpPage() {
    return (
        <SignUpPageContainer>
            <SignUpPageTitle>Create your account</SignUpPageTitle>
            <SignupForm />
        </SignUpPageContainer>
    );
}

const SignUpPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 35%;
`;

const SignUpPageTitle = styled(XL)`
    text-align: center;
`;
