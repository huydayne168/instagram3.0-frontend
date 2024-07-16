import React from "react";
import { PhotoVideo } from "../../../../models/PhotoVideo";
import VideoPhotoSwiper from "../../../../components/UI/VideoPhotoSwiper";
import LikeIcon from "../../../../components/UI/Icons/LikeIcon";
import CommentIcon from "../../../../components/UI/Icons/CommentIcon";
import SharePostIcon from "../../../../components/UI/Icons/SharePostIcon";
import SaveIcon from "../../../../components/UI/Icons/SaveIcon";
import split1000 from "../../../../utils/split1000";

const PostContent: React.FC<{
    photoVideoList: PhotoVideo[];
    caption: string;
    likesCount: number;
    username: string;
}> = ({ photoVideoList, caption, likesCount, username }) => {
    return (
        <div className="w-full">
            {/* Post Photo & Video */}
            <VideoPhotoSwiper videoPhotoList={photoVideoList} />

            {/* Post Actions */}
            <div className="flex items-center mt-[10px] pb-2 h-10">
                <div className="flex items-center mr-3 hover:opacity-70 cursor-pointer">
                    <LikeIcon />
                </div>
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
            <div className="font-semibold text-sm ">{split1000(10)} likes</div>

            {/* Post Caption */}
            <div className="text-sm">
                <span className="font-semibold inline-block mr-1">
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
