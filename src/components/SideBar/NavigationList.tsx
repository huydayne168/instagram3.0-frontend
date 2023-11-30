import React from "react";
import NavigationItem from "./NavigationItem";
import HomeIcon from "../UI/Icons/HomeIcon";
import SearchIcon from "../UI/Icons/SearchIcon";
import ExploreIcon from "../UI/Icons/ExploreIcon";
import ReelsIcon from "../UI/Icons/ReelsIcon";
import MessageIcon from "../UI/Icons/MessageIcon";
import NotificationIcon from "../UI/Icons/NotificationIcon";
import CreateIcon from "../UI/Icons/CreateIcon";
import { useAppSelector } from "../../hooks/useStore";
import defaultAvatar from "../../assets/default-avatar.png";

const UserAvatar = () => {
    const authSlice = useAppSelector((state) => state.authSlice);
    const userInfo = authSlice.userInfo;
    return (
        <img
            className="w-6 h-6 rounded-full"
            src={userInfo?.avatar ?? defaultAvatar}
            alt="avatar"
        />
    );
};

const NavigationList = () => {
    const authSlice = useAppSelector((state) => state.authSlice);
    const userInfo = authSlice.userInfo;
    return (
        <div className="text-white">
            <NavigationItem icon={<HomeIcon />} title="Home" />
            <NavigationItem icon={<SearchIcon />} title="Search" />
            <NavigationItem icon={<ExploreIcon />} title="Explore" />
            <NavigationItem icon={<ReelsIcon />} title="Reels" />
            <NavigationItem icon={<MessageIcon />} title="Message" />
            <NavigationItem icon={<NotificationIcon />} title="Message" />
            <NavigationItem icon={<CreateIcon />} title="Create" />
            <NavigationItem
                icon={<UserAvatar />}
                title={userInfo?.username ?? "Log in"}
            />{" "}
            {/* Will fix this later */}
        </div>
    );
};

export default NavigationList;
