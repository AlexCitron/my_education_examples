import TaskItem from "./task.item.jsx";
import handleToggleComplete from "../handlers/handleToggleComplete.js";
import handleDeleteTask from "../handlers/handleDeleteTask.js";
import TaskButtonsSection from "./task.buttons.section.jsx";

export default function TaskList({time, tasks, setTasks}) {

    function overdue(task) {
        if(new Date(task.dueDate) < new Date(time)){
            return 'overdue'
        }
        return ""
    }
    return (
        <div className='mt-5 mx-10 pt-2.5 border-t-2 border-gray-200'>
            <ul>
                {tasks && tasks.map((task, index) => (
                    <li
                        key={index}
                        className='rounded-md border-1 text-xl flex items-center pt-1 pb-2.5 px-5 mb-2' >
                        <TaskItem task={task} key={index}/>
                        <TaskButtonsSection  task={task} setTasks={setTasks}/>
                        {/*<div className='task-buttons'>*/}
                        {/*    <button className='complete-button' onClick={() => handleToggleComplete(task, setTasks)}>{task.completed ? 'Return' : 'Complete'}</button>*/}
                        {/*    <button className='delete-button' onClick={() => handleDeleteTask(task, setTasks)}>Delete</button>*/}
                        {/*</div>*/}
                    </li>
                ))}
            </ul>
        </div>
    )
}