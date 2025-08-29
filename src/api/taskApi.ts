import { apiFetch } from "./apiClient";
import type {
    TaskListResponseDTO,
    TaskItemResponseDTO,
    CreateTaskRequestDTO,
    UpdateTaskRequestDTO,
    DeleteTaskRequestDTO,
    GetTasksRequestDTO,
} from "@/types/task/task.dto";

export const taskApi = {
    getTasksByUser: async (
        userData: GetTasksRequestDTO
    ): Promise<TaskListResponseDTO> => {
        
        return await apiFetch<TaskListResponseDTO>(
            "http://localhost:1234/tasks/",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userData.userToken}`,
                },
            }
        );
    },

    create: async (
        taskData: CreateTaskRequestDTO
    ): Promise<TaskItemResponseDTO> => {
        return await apiFetch<TaskItemResponseDTO>(
            "http://localhost:1234/tasks/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${taskData.userToken}`,
                },
                body: JSON.stringify(taskData.taskData),
            }
        );
    },

    updateTaskCompleted: async (
        taskData: UpdateTaskRequestDTO
    ): Promise<void> => {
        const { id, completed } = taskData.taskData;

        await apiFetch<void>(`http://localhost:1234/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${taskData.userToken}`,
            },
            body: JSON.stringify({ completed }),
        });
    },

    delete: async (taskData: DeleteTaskRequestDTO): Promise<void> => {
        const { id } = taskData.taskData;
        await apiFetch<void>(`http://localhost:1234/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${taskData.userToken}`,
            },
        });
    },
};
