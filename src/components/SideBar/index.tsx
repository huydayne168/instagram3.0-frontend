import { createContext, useReducer } from "react";
import SideBarLogo from "./SideBarLogo";
import NavigationList from "./NavigationList";

type SideBarState = "normal" | "search" | "notification";
type SideBarAction = {
    type: SideBarState;
    payload: string;
};

const SideBarStateContext = createContext<any>(null);
const sideBarReducer = (state: SideBarState, action: SideBarAction) => {
    switch (action.type) {
        case "search":
            if (state !== "search") return "search";
            else if (state === "search") return "normal";
            return "normal";
        case "notification":
            if (state !== "notification") return "notification";
            else if (state === "notification") return "normal";
            return "normal";
        default:
            return "normal";
    }
};

const SideBar = () => {
    const [sideBarState, dispatch] = useReducer(sideBarReducer, "normal");

    return (
        <SideBarStateContext.Provider
            value={{
                sideBarState,
                dispatch,
            }}
        >
            <div className="h-full w-60 flex flex-col px-3 pt-2 pb-5 border-r-0.5 border-lightDark transition delay-300 ease-in">
                <SideBarLogo />
                <NavigationList />
            </div>
        </SideBarStateContext.Provider>
    );
};

export default SideBar;
export { SideBarStateContext };
