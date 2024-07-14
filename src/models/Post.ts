import { PhotoVideo } from "./PhotoVideo";
import { User } from "./User";

export type Post = {
    _id: string;
    caption: string;
    createdAt?: Date;
    updatedAt?: Date;
    userId: User;
    photoVideo: PhotoVideo[];
    likesCount: number | 0;
};
