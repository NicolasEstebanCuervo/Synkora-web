import type { ChangeEvent } from "react";
import type {
    CreateTaskDTO,
    DeleteTaskDTO,
    ITask,
    UpdateTaskDTO,
    FilterTaskByStatusDTO,
    TaskStatusFilter,
} from "./task.dto";

export interface ITaskContext {
    tasks: ITask[] | [];
    allTasks: ITask[] | [];
    completedCount: number;
    pendingCount: number;
    activeFilter: TaskStatusFilter;

    filterTasksByStatus: (TaskFilterParams: FilterTaskByStatusDTO) => void;

    createTask: (taskData: CreateTaskDTO) => void;
    deleteTask: (taskData: DeleteTaskDTO) => void;
    updateTaskCompleted: (taskData: UpdateTaskDTO) => void;
    filterTasksByText: (e: ChangeEvent<HTMLInputElement>) => void;
    logout: () => Promise<void>;
}
