export type User = {
    _id: string;
    username: string;
    password?: string;
    email: string;
    bio: string | null;
    fullName: string;
    avatar: string | null;
    refreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
