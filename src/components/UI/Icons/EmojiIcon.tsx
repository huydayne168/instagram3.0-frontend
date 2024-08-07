import React from "react";

const EmojiIcon: React.FC<{ height?: number; width?: number }> = ({
    height,
    width,
}) => {
    return (
        <svg
            aria-label="Emoji"
            className="_ab6-"
            color="rgb(142, 142, 142)"
            fill="rgb(142, 142, 142)"
            height={height ? height.toString() : "13"}
            role="img"
            viewBox="0 0 24 24"
            width={width ? width.toString() : "13"}
        >
            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
        </svg>
    );
};

export default EmojiIcon;
