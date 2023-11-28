import React from "react";
import LogoText from "../../components/UI/Logo/LogoText";
import Footer from "../../components/Footer/Footer";
import LoginForm from "./LoginForm";
import useRedirect from "../../hooks/useRedirect";
const Login = () => {
    const { gotoSignUpPage } = useRedirect();

    return (
        <div className="flex flex-col gap-8 pb-14 items-center justify-center">
            <div className="border border-textGray flex flex-col items-center w-96 mt-2 px-3 py-9">
                <div className="my-3">
                    <LogoText color="#000" />
                </div>

                {/* Log in form */}
                <LoginForm />
            </div>
            <div className="border border-textGray w-96 h-16 mb-8 p-3 flex justify-center items-center">
                Don't have an account?{"  "}
                <span
                    className="text-blue pl-1 cursor-pointer"
                    onClick={gotoSignUpPage}
                >
                    Sign up
                </span>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
