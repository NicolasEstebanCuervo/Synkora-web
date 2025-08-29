import styled from "@emotion/styled";
import { MD } from "@styles/fonts";
import { useState } from "react";
import { Checkbox } from "@components/checkBox";
import ExitIcon from "@assets/icons/exitIcon";
import { useTheme } from "@emotion/react";
import { useTaskContext } from "@context/useTaskContext";
import type { ITask } from "@/types/task/task.dto";

export const TaskItem = ({ id, title, description, completed }: ITask) => {
    const theme = useTheme();

    const { deleteTask, updateTaskCompleted } = useTaskContext();
    const [localCompleted, setLocalCompleted] = useState(completed);

    const handleToggle = async () => {
        const newValue = !localCompleted;
        setLocalCompleted(newValue);
        await updateTaskCompleted({ id: id, completed: newValue });
    };

    return (
        <TaskItemContainer>
            <TaskItemBody>
                <Checkbox checked={localCompleted} onChange={handleToggle} />
                <TaskItemContent>
                    <MD
                        style={{
                            textDecoration: localCompleted
                                ? "line-through"
                                : "none",
                            opacity: localCompleted ? 0.5 : 1,
                        }}
                    >
                        {title}
                    </MD>
                    <MD
                        color={theme.colors.text.secondary}
                        style={{
                            textDecoration: localCompleted
                                ? "line-through"
                                : "none",
                            opacity: localCompleted ? 0.5 : 1,
                        }}
                    >
                        {description}
                    </MD>
                </TaskItemContent>
            </TaskItemBody>

            <TaskItemDeleteButton onClick={() => deleteTask({ id: id })}>
                <ExitIcon />
            </TaskItemDeleteButton>
        </TaskItemContainer>
    );
};

const TaskItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    padding: 1rem;
    border-radius: 1rem;
`;

const TaskItemBody = styled.div`
    display: flex;
    gap: 1rem;
`;

const TaskItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    padding-right: 2rem;
`;

const TaskItemDeleteButton = styled.button`
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    transition: all 0.2s ease-in-out;
    border: none;
    background: transparent;

    &:hover {
        transform: translateY(-1px);
    }

    &:active {
        transform: scale(0.99);
    }
`;
