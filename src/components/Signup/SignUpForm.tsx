import React, { useState, useCallback } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
const SignUpForm = () => {
    // Sign up form data:
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const getEmailHandler = useCallback((value: string) => {
        setEmail(value);
    }, []);

    const getFullNameHandler = useCallback((value: string) => {
        setFullName(value);
    }, []);

    const getUsernameHandler = useCallback((value: string) => {
        setUsername(value);
    }, []);

    const getPasswordHandler = useCallback((value: string) => {
        setPassword(value);
    }, []);

    return (
        <form action="#" className="flex flex-col items-center gap-2">
            <Button content="Log in with Facebook" />
            <div className="w-64 my-2 flex items-center justify-between text-xs text-textGray before:content-[''] before:h-px before:w-24 before:bg-textGray before:inline-block after:inline-block after:bg-textGray after:content-[''] after:h-px after:w-24 ">
                OR
            </div>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                getInputValueHandler={getEmailHandler}
            />
            <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                getInputValueHandler={getFullNameHandler}
            />
            <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                getInputValueHandler={getUsernameHandler}
            />
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                getInputValueHandler={getPasswordHandler}
            />

            <p className="my-3 mx-12 flex flex-col items-center gap-4 text-textGray text-xs text-center">
                <span>
                    People who use our service may have uploaded your contact
                    information to Instagram.
                    <a className="text-blue" href="#">
                        {" "}
                        Learn More
                    </a>
                </span>
                <span>
                    By signing up, you agree to our{" "}
                    <a className="text-blue" href="#">
                        Term
                    </a>
                    ,{" "}
                    <a className="text-blue" href="#">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a className="text-blue" href="#">
                        Cookies
                    </a>
                </span>
            </p>
            <Button content="Sign Up" />
        </form>
    );
};

export default SignUpForm;
