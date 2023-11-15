import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/Signup/SignUp";

const router = createBrowserRouter([
    {
        path: "/sign-up",
        element: <SignUp />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
