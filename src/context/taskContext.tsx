import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./useTaskContext";
import { useErrorContext } from "./useErrorContext";
import { taskApi } from "@api/taskApi";
import type {
    CreateTaskDTO,
    DeleteTaskDTO,
    FilterTaskByStatusDTO,
    ITask,
    TaskStatusFilter,
    UpdateTaskDTO,
    CreateTaskRequestDTO,
    UpdateTaskRequestDTO,
    DeleteTaskRequestDTO,
} from "@/types/task/task.dto";

export default function TaskProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { showError } = useErrorContext();

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [allTasks, setAllTasks] = useState<ITask[]>([]);
    const [activeFilter, setActiveFilter] = useState<TaskStatusFilter>("all");

    const completedCount = allTasks.filter((t) => t.completed).length;
    const pendingCount = allTasks.filter((t) => !t.completed).length;

    const getToken = async () => {
        const user = auth.currentUser;
        if (!user) throw new Error("No authenticated user found");
        return await user.getIdToken();
    };

    const clearTasks = () => {
        setTasks([]);
        setAllTasks([]);
        setActiveFilter("all");
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const token = await getToken();
                    const data = await taskApi.getTasksByUser({
                        userToken: token,
                    });
                    setTasks(data.tasks);
                    setAllTasks(data.tasks);
                } catch (error) {
                    showError(`Failed to load tasks: ${String(error)}`);
                }
            } else {
                clearTasks();
            }
        });

        return () => unsubscribe(); 
    }, [showError]);

    const logout = async () => {
        clearTasks();
        await auth.signOut();
        navigate("/signin");
    };


    const filterTasksByStatus = (taskFilter: FilterTaskByStatusDTO) => {
        switch (taskFilter.filter) {
            case "completed":
                setTasks(taskFilter.source.filter((task) => task.completed));
                setActiveFilter("completed");
                break;
            case "incomplete":
                setTasks(taskFilter.source.filter((task) => !task.completed));
                setActiveFilter("incomplete");
                break;
            default:
                setTasks(taskFilter.source);
                setActiveFilter("all");
        }
    };

    const filterTasksByText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();

        if (value === "") {
            setTasks(allTasks);
            return;
        }

        setTasks(
            allTasks.filter(
                (task) =>
                    task.title.toLowerCase().includes(value) ||
                    task.description.toLowerCase().includes(value)
            )
        );
    };

    const createTask = async (taskData: CreateTaskDTO) => {
        try {
            const userToken = await getToken();
            const requestDTO: CreateTaskRequestDTO = { taskData, userToken };
            const data = await taskApi.create(requestDTO);

            navigate("/");
            const updatedTasks = [...allTasks, data.task];
            setAllTasks(updatedTasks);
            filterTasksByStatus({ source: updatedTasks, filter: activeFilter });
        } catch (error) {
            showError(`Failed to create task: ${String(error)}`);
        }
    };

    const deleteTask = async (taskData: DeleteTaskDTO) => {
        try {
            const userToken = await getToken();
            const requestDTO: DeleteTaskRequestDTO = { taskData, userToken };
            await taskApi.delete(requestDTO);

            const updatedTasks = allTasks.filter(
                (task) => task.id !== taskData.id
            );
            setAllTasks(updatedTasks);
            filterTasksByStatus({ source: updatedTasks, filter: activeFilter });
        } catch (error) {
            showError(`Failed to delete task: ${String(error)}`);
        }
    };

    const updateTaskCompleted = async (taskData: UpdateTaskDTO) => {
        try {
            const userToken = await getToken();
            const requestDTO: UpdateTaskRequestDTO = { taskData, userToken };

            await taskApi.updateTaskCompleted(requestDTO);
            const updatedTasks = allTasks.map((task) =>
                task.id === taskData.id
                    ? { ...task, completed: taskData.completed }
                    : task
            );
            setAllTasks(updatedTasks);
            filterTasksByStatus({ source: updatedTasks, filter: activeFilter });
        } catch (error) {
            showError(`Failed to update task: ${String(error)}`);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                allTasks,
                completedCount,
                pendingCount,
                activeFilter,
                filterTasksByStatus,
                createTask,
                deleteTask,
                updateTaskCompleted,
                filterTasksByText,
                logout,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
