import handleToggleComplete from "../handlers/handleToggleComplete.js";
import handleDeleteTask from "../handlers/handleDeleteTask.js";

export default function TaskButtonsSection({ task, setTasks }) {
    return (
        <div className='flex flex-col gap-2'>
            <button className='px-2 py-1 bg-green-500 text-white rounded font-bold cursor-pointer transition duration-300 ease-in-out
            hover:bg-green-400 transform translate-y-1 text-sm'
                    onClick={() => handleToggleComplete(task, setTasks)}>
                {task.completed ? 'Return' : 'Complete'}
            </button>
            <button className='px-2 py-1 bg-red-400 text-white rounded font-bold cursor-pointer transition duration-300 ease-in-out
            hover:bg-red-300 transform translate-y-1 text-sm'
                onClick={() => handleDeleteTask(task, setTasks)}>
                Delete
            </button>
        </div>
    )
}