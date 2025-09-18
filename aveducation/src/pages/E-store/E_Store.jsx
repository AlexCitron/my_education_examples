import { lazy } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import FetchData from "./utils/FetchData.js";
import E_Store_Layout from "./components/E_Store_Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const EHome = lazy(() => import("./pages/EHome"));
const EAbout = lazy(() => import("./pages/EAbout"));
const ECart = lazy(() => import("./pages/ECart"));
const ECategory = lazy(() => import("./pages/ECategory"));
const EProductDetails = lazy(() => import("./pages/EProductDetails"));
const EThanks = lazy(() => import("./pages/EThanks"));

/*Setting routes*/
const router = createBrowserRouter([{
    path: "/", element: <E_Store_Layout />, children: [
        {
            index: true,
            element: <EHome />,
            loader: () => FetchData('http://localhost:9000/categories'),
            errorElement: <ErrorBoundary />},
        {
            path: "category/:categoryId",
            element: <ECategory />,
            loader: () => FetchData('http://localhost:9000/products'),
            errorElement: <ErrorBoundary />},
        {path: "cart", element: <ECart />},
        {path: "about", element: <EAbout />},
        {path: "product/:productId", element: <EProductDetails />},
        {path: "thanks", element: <EThanks />},
        {path: "*", element: <EThanks />},
    ]
}])

export default function E_Store() {
    return <RouterProvider router={router} />
}

