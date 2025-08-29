import styled from "@emotion/styled";
import Sidebar from "@/components/sidebar";
import TaskList from "@/components/taskList";

export default function HomePage() {
    return (
        <HomePageContainer>
            <Sidebar />
            <TaskList />
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
`;
