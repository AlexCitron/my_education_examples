import AddTaskForm from "./add.tasks.form.jsx";
import ButtonCloseOpenForm from "./button.close.form.jsx";
import handleToggleSection from "../handlers/handleToggleSection.js";
import TaskList from "./task.list.jsx";
import handleSortButtonClick from "../handlers/handleSortButtonsClick.js";


export default function FormsContainer(props) {
    const {tasks, className, setTasks, setOpenSection, openSection,  sortType, setSortType, sortOrder, setSortOrder, time }  = props

    switch (className) {
        case "task-add-container":
            return (
                <div className='relative bg-white flex flex-col task-form mb-5 animate-fade-in shadow-md rounded-md py-5'>
                    <h2 className="text-gray-700 font-semibold text-3xl pl-10">Add Task to list</h2>
                    <ButtonCloseOpenForm
                        isOpen={openSection.addTasksForm}
                        onClick={() => handleToggleSection('addTasksForm', setOpenSection)} />
                    {openSection.addTasksForm && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
                </div>
            )
        case "task-container":
            return(
                <div className='relative bg-white flex flex-col task-form mb-5 animate-fade-in shadow-md rounded-md py-5'>
                    <h2 className="text-gray-700 font-semibold text-3xl pl-10">Tasks</h2>
                    <ButtonCloseOpenForm
                        isOpen={openSection.tasksForm}
                        onClick={() => handleToggleSection('tasksForm', setOpenSection)}/>
                    {/*<div className="flex justify-start items-center gap-12 mb-5">*/}
                    {/*    <button className={`sort-button ${sortType === 'date' ? "active" : ""}`} onClick={() => handleSortButtonClick("date", sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks)}>By date {sortType === 'date' && sortOrder === 'asc' ? "\u2191" : "\u2193"}</button>*/}
                    {/*    <button className={`sort-button ${sortType === 'priority' ? "active" : ""}`} onClick={() => handleSortButtonClick('priority', sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks)}>By Priority {sortType === 'priority' && sortOrder === 'asc' ? "\u2191" : "\u2193"}</button>*/}
                    {/*</div>*/}
                    {openSection.tasksForm && <TaskList time={time} tasks={tasks} setTasks={setTasks}/>}
                </div>
            )
        case "completed-task-container":
            return(
                <div className='relative bg-white flex flex-col task-form mb-5 animate-fade-in shadow-md rounded-md py-5'>

                    <h2 className="text-gray-700 font-semibold text-3xl pl-10">Completed Tasks </h2>
                    <ButtonCloseOpenForm
                        isOpen={openSection.completedTasksForm}
                        onClick={() => handleToggleSection('completedTasksForm', setOpenSection)} />
                    {openSection.completedTasksForm && <TaskList time={time} tasks={tasks} setTasks={setTasks}/> }
                </div>
            )
        default:
            return <></>
    }
}