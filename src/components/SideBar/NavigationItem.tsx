import React from "react";

const NavigationItem: React.FC<{
    icon: JSX.Element;
    title: string;
    onClick?: Function;
}> = ({ icon, title, onClick }) => {
    return (
        <div
            className="group p-3 mt-0.5 flex items-center gap-4 hover:bg-lightDark cursor-pointer rounded-lg"
            onClick={() => {
                onClick && onClick();
            }}
        >
            <div className="group-hover:scale-105 transition-all ease-in delay-100">
                {icon}
            </div>
            <p className="text-base font-normal">{title}</p>
        </div>
    );
};

export default NavigationItem;
