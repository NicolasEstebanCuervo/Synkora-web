import { useErrorContext } from "@context/useErrorContext";
import styled from "@emotion/styled";

export default function ErrorAlert() {
    const { error } = useErrorContext();

    return (
        <>{error?.active && <AlertContainer>{error.message}</AlertContainer>}</>
    );
}

const AlertContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: ${({ theme }) => theme.colors.background.error};
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 500;
`;
