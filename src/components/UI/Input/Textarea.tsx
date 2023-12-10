import React, { useCallback, useEffect, useState } from "react";

const Textarea: React.FC<{
    name: string;
    id: string;
    placeholder?: string;
    getTextareaValueHandler: Function;
    addedEmojis?: string[];
    className: string;
}> = ({
    name,
    id,
    placeholder,
    addedEmojis,
    getTextareaValueHandler,
    className,
}) => {
    const [value, setValue] = useState<string>("");

    const textareaHandler = useCallback((value: string) => {
        setValue(value);
        getTextareaValueHandler(value);
    }, []);

    useEffect(() => {
        addedEmojis &&
            addedEmojis.length > 0 &&
            setValue((pre) => pre + addedEmojis[addedEmojis.length - 1]);
    }, [addedEmojis]);

    return (
        <textarea
            value={value}
            onChange={(e) => {
                textareaHandler(e.target.value);
            }}
            name={name}
            id={id}
            placeholder={placeholder}
            cols={30}
            rows={10}
            className={className}
        ></textarea>
    );
};

export default Textarea;
