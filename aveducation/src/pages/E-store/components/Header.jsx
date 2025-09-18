import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className={'header-container'}>
            <header className="header">
                <nav>
                    <ul>
                        <NavLink to={'/eStore'}><li>Home</li></NavLink>
                        <NavLink to={'/eStore/about'}><li>About</li></NavLink>
                        <NavLink to={'/eStore/search'}><li>Search</li></NavLink>
                        <NavLink to={'/eStore/login'}><li>Login</li></NavLink>
                    </ul>
                </nav>
            </header>
            <hr/>
        </div>
    )
}