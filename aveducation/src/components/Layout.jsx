import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}