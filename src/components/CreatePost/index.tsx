import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
    return (
        <div className=" absolute w-screen h-screen flex justify-center items-center ">
            {/* This is the backdrop*/}
            <div className="absolute inset-0 h-screen w-screen bg-dark opacity-70 z-10"></div>
            <CreatePostModal />
        </div>
    );
};

export default CreatePost;
