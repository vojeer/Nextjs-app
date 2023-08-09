"use client";
import { ITask } from "@/data/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiTrash } from "react-icons/hi"
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/data/api";
interface TaskProps {
  task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [editTaskValue, setNewEditTaskValue] = useState<string>("")
  const [deleteTaskValue, setDeleteTaskValue] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {

    e.preventDefault();
    await editTodo({
      id: task.id,
      text: editTaskValue
    })
    setModalOpenEdit(false);
    router.refresh();
  }
  const handleDeleteTask = async (id:string) => {
    await deleteTodo(id)
    setDeleteTaskValue(false);
    router.refresh();
  }
  return (
    <tr>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-">
        <FiEdit onClick={() => setModalOpenEdit(true)} cursor={'pointer'} className="text-blue-500" size={20} />
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit the Task</h3>
            <div className="modal-action">
              <input
                value={editTaskValue}
                onChange={(e) => setNewEditTaskValue(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <HiTrash onClick={() => setDeleteTaskValue(true)}  cursor={'pointer'} className="text-red-500" size={25} />
        <Modal modalOpen={deleteTaskValue} setModalOpen={setDeleteTaskValue}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Are you sure want to delete this task?</h3>
            <div className="modal-action">
              <button onClick={() =>handleDeleteTask(task.id)} type="submit" className="btn">
                Yes
              </button>
            </div>
          </form>
        </Modal>
   
      </td>
    </tr>
  )
}
export default Task;
