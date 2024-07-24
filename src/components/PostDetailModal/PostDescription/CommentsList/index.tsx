import React, { useEffect } from "react";
import { Comment as CommentModel } from "../../../../models/Comment";
import Avatar from "../../../UI/Avatar/Avatar";
import { Post } from "../../../../models/Post";
import Comment from "./Comment";
import { getComments } from "../../../../services/commentService";

const CommentsList: React.FC<{
    postData: Post;
}> = ({ postData }) => {
    const [commentsList, setCommentsList] = React.useState<CommentModel[]>([]);
    // Get Comments List:
    const getCommentsListHandler = async () => {
        try {
            const result = await getComments(postData._id);
            setCommentsList(result.comments);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCommentsListHandler();
    }, []);

    return (
        <div className="h-full w-full absolute p-4 border-l border-b border-lightDark overflow-auto scrollbar-hide">
            {/* Post Caption */}
            <div className="flex items-center pb-4 pr-4 pt-[5px]">
                <Avatar
                    avatarUrl={postData.userId.avatar}
                    username={postData.userId.username}
                    className="w-8 h-8 mr-[18px]"
                />
                <div className="text-white text-sm flex-1">
                    <span className="font-semibold cursor-pointer mr-1">
                        {postData.userId.username}
                    </span>
                    <span>{postData.caption}</span>
                </div>
            </div>

            {/* Comments */}
            {commentsList.length > 0 ? (
                commentsList.map((comment) => {
                    return <Comment commentData={comment} />;
                })
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CommentsList;
