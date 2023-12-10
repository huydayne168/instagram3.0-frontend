import React, { useCallback } from "react";
import NavigationItem from "./NavigationItem";
import HomeIcon from "../UI/Icons/HomeIcon";
import SearchIcon from "../UI/Icons/SearchIcon";
import ExploreIcon from "../UI/Icons/ExploreIcon";
import ReelsIcon from "../UI/Icons/ReelsIcon";
import MessageIcon from "../UI/Icons/MessageIcon";
import NotificationIcon from "../UI/Icons/NotificationIcon";
import CreateIcon from "../UI/Icons/CreateIcon";
import SettingIcon from "../UI/Icons/SettingIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { sideBarActions } from "../../lib/redux/sideBarSlice";
import useRedirect from "../../hooks/useRedirect";
import Avatar from "../UI/Avatar/Avatar";

const NavigationList = () => {
    const authSlice = useAppSelector((state) => state.authSlice);
    const userInfo = authSlice.userInfo;
    const dispatch = useAppDispatch();

    const { gotoHomePage } = useRedirect();

    // Functions to handle navigation items that redirect to another pages clicked:
    const clickRedirect = useCallback((page: string) => {
        page = page.toLowerCase();
        dispatch(sideBarActions.selectCurrentPage(page));
        switch (page) {
            case "home":
                gotoHomePage();
                break;
            default:
                break;
        }
    }, []);

    // function to handle when user click search or notifications:
    const clickOpenModal = useCallback((modal: string) => {
        modal = modal.toLowerCase();
        switch (modal) {
            case "search":
                dispatch(sideBarActions.openModal("search"));
                break;
            case "notifications":
                console.log(modal);
                dispatch(sideBarActions.openModal("notifications"));
                break;
            default:
                break;
        }
    }, []);

    return (
        <div className="flex flex-col justify-between h-full text-white">
            <div className="flex flex-col gap-3">
                <NavigationItem
                    icon={<HomeIcon />}
                    title="Home"
                    onClick={clickRedirect}
                />
                <NavigationItem
                    icon={<SearchIcon />}
                    title="Search"
                    onClick={clickOpenModal}
                />
                <NavigationItem
                    icon={<ExploreIcon />}
                    title="Explore"
                    onClick={clickRedirect}
                />
                <NavigationItem
                    icon={<ReelsIcon />}
                    title="Reels"
                    onClick={clickRedirect}
                />
                <NavigationItem
                    icon={<MessageIcon />}
                    title="Message"
                    onClick={clickRedirect}
                />
                <NavigationItem
                    icon={<NotificationIcon />}
                    title="Notifications"
                    onClick={clickOpenModal}
                />
                <NavigationItem
                    icon={<CreateIcon />}
                    title="Create"
                    onClick={clickRedirect}
                />
                {userInfo && (
                    <NavigationItem
                        icon={
                            <Avatar
                                avatarUrl={userInfo.avatar}
                                username={userInfo.username}
                                className="w-6 h-6 rounded-full"
                            />
                        }
                        title={"Profile"}
                        onClick={clickRedirect}
                    />
                )}
            </div>

            <NavigationItem icon={<SettingIcon />} title="More" />
        </div>
    );
};

export default NavigationList;
