import styled from "@emotion/styled";
import SignInForm from "@/components/signInForm";
import { XL } from "@styles/fonts";

export default function SignInPage() {
    return (
        <SignInPageContainer>
            <SignInPageTitle>Welcome back</SignInPageTitle>
            <SignInForm />
        </SignInPageContainer>
    );
}

const SignInPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 35%;
`;

const SignInPageTitle = styled(XL)`
    text-align: center;
`;
