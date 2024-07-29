import React from "react";
import { useAppSelector } from "../../../hooks/useStore";
import NotificationsTag from "./NotificationsTag";

const NotificationsModal = () => {
    const openedModal = useAppSelector(
        (state) => state.sideBarSlice
    ).openedModal;
    return (
        <div
            className={`${
                openedModal === "notifications"
                    ? "w-96 border-r-0.5"
                    : "w-0 border-0"
            } h-full py-2 flex flex-col bg-dark transition-all ease-in delay-300
            overflow-hidden rounded-3xl  border-lightDark`}
        >
            <h2 className="pt-3 pb-9 pr-4 pl-6 text-2xl text-white font-semibold">
                Notifications
            </h2>
            <NotificationsTag />
            <NotificationsTag />
        </div>
    );
};

export default NotificationsModal;
