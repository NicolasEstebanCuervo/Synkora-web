import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { MD } from "../../styles/fonts";

interface IInputText {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
}

export default function InputText({
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    minLength,
    maxLength,
}: IInputText) {
    const theme = useTheme();

    return (
        <InputFieldContainer>
            <MD color={theme.colors.text.secondary}>{label}</MD>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                required
            />
        </InputFieldContainer>
    );
}

const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;

const Input = styled.input`
    padding: 0.8rem;
    border: 2px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 8px;
    font-size: 1.1rem;
    background: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.primary};

    &:focus {
        outline: none;
    }
`;
