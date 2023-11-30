import { useContext } from "react";
import { SideBarStateContext } from ".";
import LogoText from "../UI/Logo/LogoText";
import LogoImg from "../UI/Logo/LogoImg";

const SideBarLogo = () => {
    const { sideBarState } = useContext(SideBarStateContext);

    return (
        <div className="mb-5 px-3 pt-6 pb-4">
            {sideBarState === "normal" ? (
                <LogoText size="small" />
            ) : (
                <LogoImg />
            )}
        </div>
    );
};

export default SideBarLogo;
