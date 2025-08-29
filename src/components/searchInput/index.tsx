import styled from "@emotion/styled";
import { useRef } from "react";
import SearchIcon from "@assets/icons/searchIcon";
import { useTaskContext } from "@context/useTaskContext";

export const SearchInput = () => {
    const { filterTasksByText } = useTaskContext();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <SearchInputContainer onClick={handleClick}>
            <SearchIcon />
            <Input
                ref={inputRef}
                type="text"
                placeholder="Type to search..."
                onChange={filterTasksByText}
            />
        </SearchInputContainer>
    );
};

const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 2.2rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.background.tertiary};
    cursor: text;
    position: relative;
`;

const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.secondary};
    }
`;
