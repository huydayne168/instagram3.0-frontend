import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {
    login,
    loginWithFacebook,
    validateLoginData,
} from "../../services/loginService";
import { AxiosError } from "axios";

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
        } else {
            setDisableLoginButton(true);
        }
    }, [username, password]);

    // Handle click Login button:
    const handleLogin = useCallback(async () => {
        const loginData = {
            username,
            password,
        };
        const validationResult = validateLoginData(loginData);

        // Validate Login data
        if (!validationResult.success) {
            setErrorMess(validationResult.error.issues[0].message);
        } else {
            const result = await login(loginData);
            // Check the errors sent from server (wrong username or password)
            if (
                result instanceof AxiosError &&
                result.response?.status === 401
            ) {
                if (result.response.data.message === "username") {
                    setErrorMess(
                        "Sorry, your username was incorrect. Please double-check your username."
                    );
                } else if (result.response.data.message === "password") {
                    setErrorMess(
                        "Sorry, your password was incorrect. Please double-check your password."
                    );
                }
            }
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
                onClick={handleLogin}
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
            {errorMess && (
                <div className="mt-4 px-4 text-sm text-errorText text-center">
                    {errorMess}
                </div>
            )}

            <div className="text-xs text-blue mt-3">Forgot password ?</div>
        </form>
    );
};

export default LoginForm;
