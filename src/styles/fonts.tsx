import styled from "@emotion/styled";

interface IFont {
    color?: string;
}

export const XL = styled.h1<IFont>`
    font-size: 2.5rem;
    max-width: 30ch;
    color: ${({ theme, color }) => color ?? theme.colors.text.primary};
`;

export const MD = styled.p<IFont>`
    font-size: 1rem;
    color: ${({ theme, color }) => color ?? theme.colors.text.primary};
`;

export const SM = styled.p<IFont>`
    font-size: 0.9rem;
    color: ${({ theme, color }) => color ?? theme.colors.text.primary};
`;

export const Link = styled.a<IFont>`
    position: relative;
    color: ${({ theme, color }) => color ?? theme.colors.text.secondary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.text.secondary};
        transform: scaleX(1);
        transform-origin: right;
        transition: transform 0.25s ease-in-out;
    }

    &:hover::after {
        transform: scaleX(0);
        transform-origin: left;
    }
`;
