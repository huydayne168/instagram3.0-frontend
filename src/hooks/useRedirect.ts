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

    const gotoProfilePage = (username?: string) => {
        navigate(`/profile/${username}`);
    };

    return { gotoLoginPage, gotoSignUpPage, gotoHomePage, gotoProfilePage };
};

export default useRedirect;
