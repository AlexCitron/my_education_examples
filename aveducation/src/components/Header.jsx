import {NavLink} from "react-router-dom";

export default function  Header() {
    return (
        <header className="bg-gray-100 shadow-xl flex gap-5 py-5 px-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutMe">AboutMe</NavLink>
            {/*<NavLink to="/weather">Weather</NavLink>*/}
            <NavLink to="/currencyExchange">Currency Exchange</NavLink>
            <NavLink to="/taskList">Task List</NavLink>
            <NavLink to="/eStore">E-store</NavLink>
        </header>
    )
}