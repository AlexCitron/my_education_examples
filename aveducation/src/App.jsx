import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AboutMe from "./pages/aboutMe/AboutMe.jsx";
import WeatherPage from "./pages/WeatherPage/WeatherPage.jsx";
import CurrencyExchange from "./pages/CurrencyExchange/CurrencyExchange.jsx";
import TaskList from "./pages/TaskList/TaskList.jsx";
import HomePage from "./pages/HomePage.jsx";
import E_Store_Layout from "./pages/E-store/components/E_Store_Layout.jsx";
import {FetchDataCat, FetchDataProd } from "./pages/E-store/utils/FetchData.js";
import ErrorBoundary from "./pages/E-store/components/ErrorBoundary.jsx";
import EHome from "./pages/E-store/pages/EHome.jsx";
import ECategory from "./pages/E-store/pages/ECategory.jsx";
import ECart from "./pages/E-store/pages/ECart.jsx";
import EAbout from "./pages/E-store/pages/EAbout.jsx";
import EProductDetails from "./pages/E-store/pages/EProductDetails.jsx";
import EThanks from "./pages/E-store/pages/EThanks.jsx";


const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {index: true, element: <HomePage />},
                {path: 'aboutMe', element: <AboutMe />},
                {path: 'weather', element: <WeatherPage />},
                {path: 'currencyExchange', element: <CurrencyExchange />},
                {path: 'taskList', element: <TaskList />},
                {path: 'eStore', element: <E_Store_Layout/>, children: [
                        {
                            index: true,
                            element: <EHome />,
                            loader: () => FetchDataCat(),
                            errorElement: <ErrorBoundary />},
                        {
                            path: "category/:categoryId",
                            element: <ECategory />,
                            loader: () => FetchDataProd(),
                            errorElement: <ErrorBoundary />},
                        {path: "cart", element: <ECart />},
                        {path: "about", element: <EAbout />},
                        {path: "product/:productId", element: <EProductDetails />},
                        {path: "thanks", element: <EThanks />},
                    ]
                },
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
