import LogoText from "../UI/Logo/LogoText";
import LogoImg from "../UI/Logo/LogoImg";
import { useAppSelector } from "../../hooks/useStore";

const SideBarLogo = () => {
    const sideBarSlice = useAppSelector((state) => state.sideBarSlice);
    const openedModal = sideBarSlice.openedModal;
    return (
        <div className="relative mb-5 px-3 pt-6 pb-4 ">
            <div
                className={`${
                    openedModal ? "scale-100" : "scale-0"
                } absolute transition-all ease-in delay-200`}
            >
                <LogoImg />
            </div>
            <div
                className={`${
                    openedModal ? "opacity-0" : "opacity-100"
                } transition-all ease-in delay-200`}
            >
                <LogoText size="small" />
            </div>
        </div>
    );
};

export default SideBarLogo;
