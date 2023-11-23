import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/Signup/SignUp";

const router = createBrowserRouter([
    {
        path: "/sign-up",
        element: <SignUp />,
        index: true,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
