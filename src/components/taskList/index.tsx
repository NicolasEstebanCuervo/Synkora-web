import styled from "@emotion/styled";
import { useTaskContext } from "@/context/useTaskContext";
import { TaskItem } from "@components/taskItem";
import { XL } from "@/styles/fonts";
import type { ITask } from "@/types/task/task.dto";

export default function TaskList() {
    const { tasks, activeFilter } = useTaskContext();
    return (
        <TaskListContainer>
            <XL>
                {activeFilter === "all"
                    ? "All My Tasks"
                    : activeFilter === "completed"
                    ? "Tasks Completed"
                    : "Pending Tasks"}
            </XL>
            {tasks.map((task: ITask) => (
                <TaskItem key={task.id} {...task} />
            ))}
        </TaskListContainer>
    );
}

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 3;
`;
