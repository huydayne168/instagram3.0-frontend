import React, { useEffect, useState } from "react";
import { PhotoVideo } from "../../../../models/PhotoVideo";
import VideoPhotoSwiper from "../../../../components/UI/VideoPhotoSwiper";
import LikeIcon from "../../../../components/UI/Icons/LikeIcon";
import CommentIcon from "../../../../components/UI/Icons/CommentIcon";
import SharePostIcon from "../../../../components/UI/Icons/SharePostIcon";
import SaveIcon from "../../../../components/UI/Icons/SaveIcon";
import split1000 from "../../../../utils/split1000";
import { useAppSelector } from "../../../../hooks/useStore";
import LikedIcon from "../../../../components/UI/Icons/LikedIcon";
import { Like } from "../../../../models/Like";
import { motion } from "framer-motion";
import {
    likePost,
    unlikePost,
    validateLikeData,
} from "../../../../services/likeService";
import usePrivateHttp from "../../../../hooks/usePrivateHttp";
import useRedirect from "../../../../hooks/useRedirect";

const PostContent: React.FC<{
    postId: string;
    photoVideoList: PhotoVideo[];
    caption: string;
    likes: Like[];
    username: string;
}> = ({ postId, photoVideoList, caption, likes, username }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [likesCount, setLikesCount] = useState<number>(likes.length);
    const currentUser = useAppSelector((state) => state.authSlice.userInfo);
    const privateHttp = usePrivateHttp();
    const gotoProfilePage = useRedirect().gotoProfilePage;

    // Check if the post is liked by the current user before?
    useEffect(() => {
        if (currentUser && currentUser._id && likes) {
            const isLiked = likes.find(
                (like) => like.userId === currentUser?._id
            );
            if (isLiked) {
                setLiked(true);
            }
        }
    }, []);

    const likeHandler = async () => {
        try {
            const validateResult = validateLikeData({ postId });
            if (!validateResult.success) {
                console.log(validateResult.error, "error");
            } else {
                setLiked(true);
                setLikesCount((prev) => prev + 1);
                const result = await likePost(privateHttp, { postId });
                console.log(result?.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const unlikeHandler = async () => {
        try {
            const validateResult = validateLikeData({ postId });
            if (!validateResult.success) {
                console.log(validateResult.error, "error");
            } else {
                setLiked(false);
                setLikesCount((prev) => prev - 1);
                const result = await unlikePost(privateHttp, { postId });
                console.log(result?.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full">
            {/* Post Photo & Video */}
            <VideoPhotoSwiper videoPhotoList={photoVideoList} />

            {/* Post Actions */}
            <div className="flex items-center mt-[10px] pb-2 h-10">
                <motion.div
                    className="flex items-center mr-3 hover:opacity-70 cursor-pointer"
                    onClick={() => {
                        liked ? unlikeHandler() : likeHandler();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {liked ? <LikedIcon /> : <LikeIcon />}
                </motion.div>
                <div className="flex items-center mr-3 hover:opacity-70 cursor-pointer">
                    <CommentIcon />
                </div>
                <div className="flex items-center mr-3 hover:opacity-70 cursor-pointer">
                    <SharePostIcon />
                </div>
                <div className="flex items-center ml-auto hover:opacity-70 cursor-pointer">
                    <SaveIcon />
                </div>
            </div>

            {/* Post Like Count */}
            <div className="font-semibold text-sm ">
                {split1000(likesCount)} {likesCount > 1 ? "likes" : "like"}
            </div>

            {/* Post Caption */}
            <div className="text-sm">
                <span
                    className="font-semibold inline-block mr-1 cursor-pointer"
                    onClick={() => {
                        gotoProfilePage(username);
                    }}
                >
                    {username}
                </span>
                <span>{caption}</span>
            </div>

            {/* View Comments */}
            <div>
                <span className="text-sm text-textSecondGray cursor-pointer mt-[2px]">
                    View all comments
                </span>
            </div>
        </div>
    );
};

export default PostContent;
