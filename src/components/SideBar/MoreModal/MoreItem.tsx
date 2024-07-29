import React from "react";

const MoreItem: React.FC<{ Icon?: React.FC; title: string }> = ({
    Icon,
    title,
}) => {
    return (
        <div className="rounded-lg hover:bg-lightSecondDark cursor-pointer">
            <div>{Icon && <Icon />}</div>
            <div className="text-sm text-white p-4 leading-[18px]">{title}</div>
        </div>
    );
};

export default MoreItem;
