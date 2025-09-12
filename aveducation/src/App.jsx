import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {index: true, element: <HomePage />},
                {path: '*', element: <h1>Path not exist yet</h1>},
            ]
        },
    ])

export default function  App() {

    return (
    <>
        <RouterProvider router={router} />
    </>
    )
}
