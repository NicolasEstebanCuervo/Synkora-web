import styled from "@emotion/styled";
import GoogleLogo from "@assets/images/googleLogo.png";

interface IButton {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit";
    isGoogle?: boolean;
}

export default function Button({
    text,
    onClick,
    type = "button",
    isGoogle = false,
}: IButton) {
    return (
        <ButtonContainer onClick={onClick} type={type} isGoogle={isGoogle}>
            {isGoogle && <ButtonIcon src={GoogleLogo} alt="Google logo" />}
            {text}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button<{ isGoogle: boolean }>`
    background: ${({ isGoogle, theme }) =>
        isGoogle
            ? theme.colors.background.quaternary
            : theme.colors.background.secondary};
    color: ${({ isGoogle, theme }) =>
        isGoogle ? theme.colors.text.textDark : theme.colors.text.primary};
    width: 100%;
    padding: ${({ isGoogle }) => (isGoogle ? "0.5rem 1rem" : "1rem")};
    border-radius: 1rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    &:hover {
        transform: translateY(-1px);
    }

    &:active {
        transform: scale(0.99);
    }
`;

const ButtonIcon = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`;
