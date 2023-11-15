import React, { useState, useCallback } from "react";

const Input: React.FC<{
    type: string;
    name: string;
    id: string;
    placeholder?: string;
    defaultValue?: string;
    getInputValueHandler: Function;
}> = ({ type, name, id, placeholder, defaultValue, getInputValueHandler }) => {
    const [value, setValue] = useState(defaultValue);

    const inputHandler = useCallback((value: string) => {
        setValue(value);
        getInputValueHandler(value);
    }, []);

    return (
        <input
            className="w-64 p-2 border border-textGray rounded-sm focus:outline-none text-sm placeholder:text-sm"
            type={type}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                inputHandler(e.target.value);
            }}
        />
    );
};

export default Input;
