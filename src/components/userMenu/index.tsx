import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import DefaultImage from "../../assets/images/defaultAvatar.png";
import { SM } from "../../styles/fonts";
import { useTaskContext } from "@/context/useTaskContext";

export const UserMenu = ({ imageSrc }: { imageSrc?: string }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { logout } = useTaskContext();
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <UserMenuContainer ref={ref}>
            <UserMenuButton onClick={() => setOpen(!open)}>
                <img src={imageSrc || DefaultImage} alt="User avatar" />
            </UserMenuButton>

            <UserMenuDropdown $open={open}>
                <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
            </UserMenuDropdown>
        </UserMenuContainer>
    );
};

const UserMenuContainer = styled.div`
    position: relative;
`;

const UserMenuButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    &:hover {
        outline: 2px solid ${({ theme }) => theme.colors.border.secondary};
    }
`;

const UserMenuDropdown = styled.div<{ $open: boolean }>`
    position: absolute;
    top: 3.5rem;
    right: 0;
    background: ${({ theme }) => theme.colors.background.quaternary};
    border-radius: 1rem;
    overflow: hidden;
    z-index: 10;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transform: ${({ $open }) =>
        $open ? "translateY(0)" : "translateY(-10px)"};
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;

    &:hover {
        transform: translateY(-1px);
    }

    &:active {
        transform: scale(0.99);
    }
`;

const MenuItem = styled(SM)`
    padding: 0.8rem 1rem;
    cursor: pointer;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text.textDark};
`;
