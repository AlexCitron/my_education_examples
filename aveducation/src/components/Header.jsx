import {NavLink} from "react-router-dom";

export default function  Header() {
    return (
        <header className="bg-gray-100 shadow-xl flex gap-5 py-5 px-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutMe">AboutMe</NavLink>
        </header>
    )
}