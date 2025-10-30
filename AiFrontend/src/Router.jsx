import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import LernUseEffect from "./components/LernUseEffect";
import ProductDetails from "./pages/ProductDetails";
import ImageGenerator from "./pages/GenerateImage";

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
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "useeffect",
                element: <LernUseEffect />
            },
            {
                path: "generate-image",
                element: <ImageGenerator />
            },
            {
                path: "product/:id?",
                element: <ProductDetails />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },

]);

export default router;