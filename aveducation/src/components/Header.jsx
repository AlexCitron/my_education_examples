import {NavLink} from "react-router-dom";

export default function  Header() {
    return (
        <header className="bg-cyan-200 shadow-xl">
            <NavLink to="/">Home</NavLink>
        </header>
    )
}