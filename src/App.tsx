import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/Signup/SignUp";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
