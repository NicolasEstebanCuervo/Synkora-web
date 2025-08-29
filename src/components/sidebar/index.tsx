import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@/assets/icons/checkIcon";
import ListIcon from "@/assets/icons/listIcon";
import ClockIcon from "@/assets/icons/clockIcon";
import { useTaskContext } from "@/context/useTaskContext";
import Button from "@components/button";
import { FilterButton } from "@components/filterButton/indext";

export default function Sidebar() {
    const navigate = useNavigate();
    const {
        allTasks,
        activeFilter,
        completedCount,
        pendingCount,
        filterTasksByStatus,
    } = useTaskContext();

    return (
        <SidebarContainer>
            <Button text="New Task" onClick={() => navigate("/tasks/create")} />

            <FilterButton
                icon={<ListIcon />}
                label="All Tasks"
                count={allTasks.length}
                onClick={() => filterTasksByStatus({source:allTasks, filter:"all"})}
                isActive={activeFilter === "all"}
            />
            <FilterButton
                icon={<CheckIcon />}
                label="Completed"
                count={completedCount}
                onClick={() => filterTasksByStatus({source:allTasks, filter:"completed"})}
                isActive={activeFilter === "completed"}
            />
            <FilterButton
                icon={<ClockIcon />}
                label="Pending"
                count={pendingCount}
                onClick={() => filterTasksByStatus({source:allTasks, filter:"incomplete"})}
                isActive={activeFilter === "incomplete"}
            />
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
`;
