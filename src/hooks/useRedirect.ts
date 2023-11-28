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

    return { gotoLoginPage, gotoSignUpPage };
};

export default useRedirect;
