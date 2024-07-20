import { Post } from "./Post";
import { User } from "./User";

export type Like = {
    _id: string;
    userId: string;
    postId: string;
};
