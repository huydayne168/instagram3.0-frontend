import React from "react";
import { useAppSelector } from "../../hooks/useStore";

const NavigationItem: React.FC<{
    icon: JSX.Element;
    title: string;
    onClick?: Function;
}> = ({ icon, title, onClick }) => {
    const sideBarSlice = useAppSelector((state) => state.sideBarSlice);
    const openedModal = sideBarSlice.openedModal;
    const currentPage = sideBarSlice.currentPage;
    return (
        <div
            className={`border border-transparent ${
                currentPage === title.toLowerCase() ? "bg-lightDark" : null
            } ${
                openedModal === title.toLowerCase() && "!border-white"
            } group p-3 mt-0.5 flex items-center gap-4 hover:bg-lightDark cursor-pointer rounded-lg `}
            onClick={() => {
                onClick && onClick(title);
            }}
        >
            <div className="group-hover:scale-105 transition-all ease-in delay-100">
                {icon}
            </div>

            <p
                className={`${
                    openedModal ? "scale-0 delay-200" : "scale-100 delay-500"
                } text-base font-normal transition-all  ease-in`}
            >
                {title}
            </p>
        </div>
    );
};

export default NavigationItem;
