import styled from "@emotion/styled";
import SynkoraLogo from "@assets/images/synkoraLogo.png"
import { useLocation } from "react-router-dom";
import { SearchInput } from "@components/searchInput";
import { UserMenu } from "@/components/userMenu";

export default function Header() {
    const location = useLocation();

    return (
        <HeaderContainer>
            <HeaderLogo src={SynkoraLogo} alt="Synkora logo" />
            {location.pathname === "/" && (
                <HeaderActions>
                    <SearchInput />
                    <UserMenu />
                </HeaderActions>
            )}
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border.primary};
`;

const HeaderLogo = styled.img`
    width: 100px;
    height: auto;
`;

const HeaderActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`