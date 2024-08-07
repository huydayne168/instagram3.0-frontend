import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Home />,
                index: true,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
