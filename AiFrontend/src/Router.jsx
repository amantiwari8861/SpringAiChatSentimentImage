import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import GenerateImage from "./pages/GenerateImage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                index: true,
                element: <LandingPage />
            },
            {
                path: "/image",
                element: <GenerateImage />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);
export default router;