import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
const RootLayout = () => {
    return (
        <div className="h-screen flex bg-dark">
            <SideBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
