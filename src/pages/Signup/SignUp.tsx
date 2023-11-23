import LogoText from "../../components/UI/Logo/LogoText";
import SignUpForm from "./SignUpForm";
import Footer from "../../components/Footer/Footer";

const SignUp = () => {
    return (
        <div className="flex flex-col gap-8 pb-14 items-center justify-center">
            <div className="border border-textGray flex flex-col items-center w-96 mt-2 px-3 py-9">
                <div className="my-3">
                    <LogoText color="#000" />
                </div>
                <div className="px-10 pb-2 font-sourceSans text-textGray text-base text-center font-semibold">
                    Sign up to see photos and videos from your friends.
                </div>
                {/* Sign up form */}
                <SignUpForm />
            </div>
            <div className="border border-textGray w-96 h-16 mb-8 p-3 flex justify-center items-center">
                Have an account?{"  "}
                <a className="text-blue pl-1" href="#">
                    Log in
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default SignUp;
