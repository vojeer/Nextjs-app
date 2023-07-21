import { ITask } from "@/data/types/tasks";
import { useState } from "react";
import { FiEdit} from "react-icons/fi";
import {HiTrash} from "react-icons/hi"
interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id} >
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
        <FiEdit cursor={'pointer'} className="text-blue-500" size={20}/>
        <HiTrash cursor={'pointer'} className="text-red-500" size={25}/>
        </td>
    </tr>
    )
}
export default Task;


