import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "@components/header";
import ErrorAlert from "@components/errorAlert";

export default function Layout() {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                <Outlet />
                <ErrorAlert />
            </Main>
        </LayoutContainer>
    );
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
    margin: 0;
`;

const Main = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;
