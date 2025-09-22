import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout({ children }) {
    return (
        <div className='flex flex-col items-center bg-gray-100 '>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}