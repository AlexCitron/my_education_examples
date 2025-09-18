import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AboutMe from "./pages/aboutMe/AboutMe.jsx";
// import WeatherPage from "./pages/WeatherPage/WeatherPage.jsx";
import CurrencyExchange from "./pages/CurrencyExchange/CurrencyExchange.jsx";
import TaskList from "./pages/TaskList/TaskList.jsx";
import HomePage from "./pages/HomePage.jsx";
import E_Store_Layout from "./pages/E-store/components/E_Store_Layout.jsx";
import EHomePage from "./pages/E-store/pages/EHomePage.jsx";
import ELoginPage from "./pages/E-store/pages/ELoginPage.jsx";
import EAboutPage from "./pages/E-store/pages/EAboutPage.jsx";
import EProductsPage from "./pages/E-store/pages/EProductsPage.jsx";
import EProductDetails from "./pages/E-store/pages/EProductDetails.jsx";
import ESearchPage from "./pages/E-store/pages/ESearchPage.jsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {index: true, element: <HomePage />},
                {path: 'aboutMe', element: <AboutMe />},
                // {path: 'weather', element: <WeatherPage />},
                {path: 'currencyExchange', element: <CurrencyExchange />},
                {path: 'taskList', element: <TaskList />},
                {path: 'taskList', element: <TaskList />},
                {path: 'eStore', element: <E_Store_Layout/>, children: [
                        {index: true, element: <EHomePage  />},
                        {path: "login", element: <ELoginPage  />},
                        {path: "about", element: <EAboutPage  />},
                        {path: "products/", element: <EProductsPage  />},
                        {path: "products/:productId", element: <EProductDetails  />},
                        {path: "search", element: <ESearchPage  />},
                        {path: "*", element: <Navigate to={"/eStore"}  />},
                    ]},
                {path: '*', element: <h1>Path not exist yet</h1>},
            ]
        },
    ])

export default function  E_Store() {

    return (
    <>
        <RouterProvider router={router} />
    </>
    )
}
