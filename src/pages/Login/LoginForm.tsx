import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { login, loginWithFacebook } from "../../services/loginService";

const inputClassName =
    "w-64 p-2 border border-textGray rounded-sm focus:outline-none text-sm placeholder:text-sm";
const buttonClassName =
    "w-64 py-2 px-3 rounded-lg font-semibold bg-blue text-white";
const LoginForm = () => {
    // Login form data:
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Validation states:
    const [errorMess, setErrorMess] = useState<string>("");
    const [disableLoginButton, setDisableLoginButton] = useState<boolean>(true);

    // get inputs value functions:
    const getUsernameHandler = useCallback((value: string) => {
        setUsername(value);
    }, []);

    const getPasswordHandler = useCallback((value: string) => {
        setPassword(value);
    }, []);

    // Disable button state:
    useEffect(() => {
        if (username && password) {
            setDisableLoginButton(false);
        }
    }, [username, password]);

    return (
        <form className="flex flex-col items-center gap-2 mt-8">
            <Input
                className={inputClassName}
                type="text"
                name="username"
                id="username"
                placeholder="Your username"
                getInputValueHandler={getUsernameHandler}
            />

            <Input
                className={inputClassName}
                type="text"
                name="password"
                id="password"
                placeholder="Your password"
                getInputValueHandler={getPasswordHandler}
            />

            <Button
                className={buttonClassName}
                content="Log in"
                disable={disableLoginButton}
                onClick={login}
            />

            <div
                className="w-64 my-2 flex items-center 
                justify-between text-xs text-textGray before:content-[''] before:h-px before:w-24 before:bg-textGray 
                before:inline-block after:inline-block after:bg-textGray after:content-[''] after:h-px after:w-24"
            >
                OR
            </div>

            <Button
                content="Log in with Facebook"
                className={buttonClassName}
                onClick={loginWithFacebook}
            />

            <div className="text-xs text-blue mt-3">Forgot password ?</div>
        </form>
    );
};

export default LoginForm;
