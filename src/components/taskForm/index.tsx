import styled from "@emotion/styled";
import { useState } from "react";
import { useTaskContext } from "@context/useTaskContext";
import InputText from "@components/inputText";
import Button from "@components/button";

export default function TaskForm() {
    const { createTask } = useTaskContext();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask({ title: title, description: description });
        setTitle("");
        setDescription("");
    };

    return (
        <TaskFormContainer onSubmit={handleSubmit}>
            <InputText
                type="text"
                label="Title"
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                minLength={5}
                maxLength={50}
            />
            <InputText
                type="text"
                label="Description"
                placeholder="Enter the description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                minLength={5}
                maxLength={100}
            />

            <Button type="submit" text="Create task" />
        </TaskFormContainer>
    );
}

const TaskFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
