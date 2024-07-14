import PostsList from "./PostsList";
import RightSide from "./RightSide";
import StoryList from "./StoryList";

const Home = () => {
    return (
        <div className="w-[calc(100%-240px)] overflow-auto flex justify-center ">
            <div className="flex flex-col items-center mr-14">
                {/* Story List */}
                <StoryList />
                {/* Posts */}
                <PostsList />
            </div>
            {/* Right Side */}
            <RightSide />
        </div>
    );
};

export default Home;
