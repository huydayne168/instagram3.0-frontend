import React, { useCallback, useRef, useState } from "react";
import EmojiIcon from "../../../UI/Icons/EmojiIcon";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import Textarea from "../../../UI/Input/Textarea";
import {
    postComment,
    validatePostCommentData,
} from "../../../../services/commentService";
import usePrivateHttp from "../../../../hooks/usePrivateHttp";

const PostComment: React.FC<{ postId: string }> = ({ postId }) => {
    const [comment, setComment] = useState<string>("");
    const [isEmojiVisible, setIsEmojiVisible] = useState(false);
    const [emojis, setEmojis] = useState<string[]>([]);
    const emojiPickerRef = useRef<HTMLDivElement | null>(null); // Ref cho div bao quanh Picker
    const privateHttp = usePrivateHttp();
    const addEmoji = useCallback((e: any) => {
        setEmojis((pre) => [...pre, e.native]);
    }, []);

    async function postCommentHandler() {
        try {
            console.log(comment);
            const postCommentData = {
                postId,
                content: comment,
            };
            const validateResult = validatePostCommentData(postCommentData);
            if (!validateResult.success) {
                console.log(validateResult.error, "error");
            } else {
                const result = await postComment(privateHttp, postCommentData);
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            className="cursor-pointer relative flex items-center py-[6px] pr-4 border-l border-lightDark"
            ref={emojiPickerRef}
        >
            <div
                className="py-2 px-4"
                onClick={() => {
                    setIsEmojiVisible(!isEmojiVisible);
                }}
            >
                <EmojiIcon width={24} height={24} />
            </div>
            {isEmojiVisible && (
                <div className="absolute -top-[328px] left-0 w-full h-full first:h-full z-20">
                    <Picker
                        data={data}
                        maxFrequentRows={0}
                        onEmojiSelect={(e: any) => {
                            addEmoji(e);
                        }}
                    />
                </div>
            )}
            <Textarea
                name="comment"
                id="comment"
                placeholder="Add a comment"
                getTextareaValueHandler={(value: string) => {
                    setComment(value);
                }}
                addedEmojis={emojis}
                className="flex-1 leading-4 text-sm h-[18px] max-h-[80px] border-none bg-transparent focus:outline-none resize-none"
            />

            <div
                className={`${
                    comment.length > 0
                        ? "cursor-pointer"
                        : "opacity-50 select-none cursor-not-allowed"
                } text-blue font-semibold text-sm ml-2`}
                onClick={comment.length > 0 ? postCommentHandler : () => {}}
            >
                Post
            </div>
        </div>
    );
};

export default PostComment;
