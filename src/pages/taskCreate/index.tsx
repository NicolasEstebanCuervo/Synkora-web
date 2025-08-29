import styled from "@emotion/styled";
import TaskForm from "@components/taskForm";
import { XL } from "@styles/fonts";

export default function TaskCreatePage() {
    return (
        <TaskCreatePageContainer>
            <TaskCreatePageTitle>Create a new task</TaskCreatePageTitle>
            <TaskForm />
        </TaskCreatePageContainer>
    );
}

const TaskCreatePageContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 35%;
`;

const TaskCreatePageTitle = styled(XL)`
    text-align: center;
`;
