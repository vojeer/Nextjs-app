import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoLIST from './components/TodoList'
import { getAllTodos } from '@/data/api';

export default async function Home() {
  const task = await getAllTodos();
  console.log(task);
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
           <h1 className="text-2xl font-bold">Todo App</h1>
           <AddTask/>
      </div>
      <TodoLIST tasks={task}/>
    </main>
  )
}
