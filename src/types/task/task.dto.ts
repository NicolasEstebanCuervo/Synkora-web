export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface CreateTaskDTO {
    title: string;
    description: string;
}

export interface DeleteTaskDTO {
    id: string;
}

export interface UpdateTaskDTO {
    id: string;    
    completed: boolean;
}

export type TaskStatusFilter = "all" | "completed" | "incomplete";

export interface FilterTaskByStatusDTO {
    source: ITask[];
    filter?: TaskStatusFilter;
}

// Requests DTOs (reuse base DTOs)
export interface CreateTaskRequestDTO {
    taskData: CreateTaskDTO; 
    userToken: string;
}

export interface UpdateTaskRequestDTO {
    taskData: UpdateTaskDTO; 
    userToken: string;
}

export interface DeleteTaskRequestDTO {
    taskData: DeleteTaskDTO;
    userToken: string;
}

export interface GetTasksRequestDTO {
    userToken: string;
}

export interface TaskListResponseDTO {
    tasks: ITask[];
}

export interface TaskItemResponseDTO {
    task: ITask;
}
