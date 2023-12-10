import React from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = () => {
    const navigate = useNavigate();

    const gotoLoginPage = () => {
        navigate("/login");
    };

    const gotoSignUpPage = () => {
        navigate("/sign-up");
    };

    const gotoHomePage = () => {
        navigate("/home");
    };

    return { gotoLoginPage, gotoSignUpPage, gotoHomePage };
};

export default useRedirect;
