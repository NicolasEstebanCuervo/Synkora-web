import styled from "@emotion/styled";

interface ICheckbox {
    checked: boolean;
    onChange: () => void;
}

export const Checkbox = ({ checked, onChange }: ICheckbox) => {
    return (
        <CheckboxContainer>
            <CheckboxInput
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <CheckboxBox checked={checked}>
                {checked}
            </CheckboxBox>
        </CheckboxContainer>
    );
};

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

const CheckboxInput = styled.input`
    display: none;
`;

const CheckboxBox = styled.span<{ checked: boolean }>`
    width: 20px;
    height: 20px;
    border: 2px solid ${({ checked, theme }) =>
        checked ? theme.colors.checkbox.inactive : theme.colors.checkbox.active};
    background-color: transparent;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    position: relative;

    &::after {
        content: "";
        width: ${({ checked }) => (checked ? "15px" : "0px")};
        height: ${({ checked }) => (checked ? "15px" : "0px")};
        border-radius: 50%;
        background: ${({theme})=> theme.colors.checkbox.active};
        transition: all 0.2s ease;
    }
`;