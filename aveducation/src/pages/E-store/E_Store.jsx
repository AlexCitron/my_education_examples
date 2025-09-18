import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import E_Store_Layout from "./components/E_Store_Layout.jsx";
import EHomePage from "./pages/EHomePage.jsx";
import ELoginPage from "./pages/ELoginPage.jsx";
import EAboutPage from "./pages/EAboutPage.jsx";
import EProductsPage from "./pages/EProductsPage.jsx";
import EProductDetails from "./pages/EProductDetails.jsx";
import ESearchPage from "./pages/ESearchPage.jsx";

const routerEStore = createBrowserRouter([
    {path: "/", element: <E_Store_Layout />, children: [
            {index: true, element: <EHomePage  />},
            {path: "login", element: <ELoginPage  />},
            {path: "about", element: <EAboutPage  />},
            {path: "products/", element: <EProductsPage  />},
            {path: "products/:productId", element: <EProductDetails  />},
            {path: "search", element: <ESearchPage  />},
            {path: "*", element: <Navigate to={"/"}  />},
        ]},
])

export default function E_Store() {
    return <RouterProvider router={routerEStore} />
}
