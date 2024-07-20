import React, { useEffect, useState } from "react";

import { getAllPosts } from "../../../services/postService";
import http from "../../../lib/axios/http";
import { Post as PostModel } from "../../../models/Post";
import Post from "./Post";

function PostsList() {
    const [postsList, setPostsList] = useState<PostModel[]>([]);
    // Get Post Handler:
    const getPostsHandler = async () => {
        try {
            const res = await getAllPosts(http);
            console.log(res?.data.postsList);
            setPostsList(res?.data.postsList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostsHandler();
    }, []);

    return (
        <div className="text-white flex flex-col items-center max-w-[630px] mt-6">
            {/* Render Posts */}
            {postsList &&
                postsList.map((post, index) => {
                    return <Post key={post._id} postData={post} />;
                })}
        </div>
    );
}

export default PostsList;
