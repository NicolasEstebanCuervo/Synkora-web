import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "@emotion/react";
import { MD } from "@styles/fonts";

interface IFilterButton {
    icon: React.ReactNode;
    label: string;
    count: number;
    onClick: () => void;
    isActive: boolean;
}

export const FilterButton = ({
    icon,
    label,
    count,
    onClick,
    isActive,
}: IFilterButton) => {
    const theme = useTheme();

    return (
        <FilterButtonContainer isActive={isActive} onClick={onClick}>
            <FilterButtonIconWrapper isActive={isActive}>
                {icon}
            </FilterButtonIconWrapper>
            <FilterButtonContent>
                <MD>{label}</MD>
                <MD color={theme.colors.text.secondary}>{count}</MD>
            </FilterButtonContent>
        </FilterButtonContainer>
    );
};

const FilterButtonContainer = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
    background-color: ${({ isActive, theme }) =>
        isActive ? theme.colors.background.secondary : "transparent"};

    &:hover {
        transform: translateY(-1px);
        background-color: ${({ theme }) => theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.99);
    }
`;

const FilterButtonIconWrapper = styled.div<{ isActive: boolean }>`
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    padding: 1.2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FilterButtonContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
