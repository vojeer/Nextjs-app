import { ITask } from "@/data/types/tasks";
import { useState } from "react";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id} >
        <td>{task.id}</td>
        <td>{task.text}</td>
    </tr>
    )
}
export default Task;


