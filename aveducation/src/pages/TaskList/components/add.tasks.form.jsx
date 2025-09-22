import {useState} from "react";
import  handleSubmitForm from "../handlers/handleSubmitForm.js";

export default function AddTaskForm({setTasks, tasks}) {

    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('Low')
    const [dueDate, setDueDate] = useState('')

    return (
        <form
            className="flex flex-col mx-auto pt-4"
            action=""
              onSubmit={(e) => handleSubmitForm(e, setTitle, setPriority, setDueDate, setTasks, tasks)}>
            <input
                className='w-80 mb-4 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2'
                onChange={(e) => setTitle(e.target.value) }
                type='text'
                value={title}
                placeholder="Task title"
                required/>
            <select
                className='w-80 mb-4 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2'
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input
                className='w-80 mb-4 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2'
                onChange={(e) => setDueDate(e.target.value)}
                type='datetime-local'
                value={dueDate}
                required/>
            <button
                className='
                 bg-blue-500
                 text-white font-bold py-3 px-6 rounded w-80
                 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:translate-y-[-2px] '
                type="submit" >Add task</button>
        </form>
        )
}