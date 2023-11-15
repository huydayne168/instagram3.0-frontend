import React from "react";

const Button: React.FC<{ content: string }> = ({ content }) => {
    return (
        <button className="w-64 py-2 px-3 rounded-lg font-semibold bg-blue text-white">
            {content}
        </button>
    );
};

export default Button;
