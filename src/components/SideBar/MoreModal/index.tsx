import React, { useEffect, useRef } from "react";
import MoreItem from "./MoreItem";
import { useAppDispatch } from "../../../hooks/useStore";
import { sideBarActions } from "../../../lib/redux/sideBarSlice";

const MoreModal = () => {
    const dispatch = useAppDispatch();
    const moreModalRef = useRef<HTMLDivElement>(null);

    // Hàm kiểm tra click ngoài
    // const handleClickOutside = (event: any) => {
    //     if (
    //         moreModalRef.current &&
    //         !moreModalRef.current.contains(event.target)
    //     ) {
    //         dispatch(sideBarActions.openMoreModal(false));
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    return (
        <div
            ref={moreModalRef}
            className="w-[250px] bg-lightDark p-2 rounded-md flex flex-col absolute -top-[calc(100%+18px)]"
        >
            <MoreItem title="Log out" />
        </div>
    );
};

export default MoreModal;
