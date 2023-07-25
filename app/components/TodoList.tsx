import { ITask } from "@/data/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[]
}
const TodoLIST: React.FC<TodoListProps> = ({ tasks }) => {
    return <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr> 
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{tasks.map((task) => <Task task={task}/>
                      
                    )}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
};

export default TodoLIST
    ;