import { Dispatch, SetStateAction } from "react";

export type TSetState<T> = Dispatch<SetStateAction<T>>;
export type TPosts = {
	id: string;
	image: string | null;
	title: string;
	author: string;
	content: string;
};

export type TPostContext = {
	posts: TPosts[] | null;
	userPosts: TPosts[] | null;
	error: string | null;
	addPost: (post: TPosts) => void;
	updatePost: (updatePost: TPosts) => void;
	deletePost: (id: string) => void;
	filterPosts: (filter: boolean) => void;
};

export type TUser = {
	name?: string;
	email: string;
	password?: string;
	passwordRepeat?: string;
} | null;

export type TAuthContext = {
	activeUser: TUser;
	error: string | null;
	updateData: (user: TUser) => void;
	registration: (user: TUser) => void;
	authorization: (user: TUser) => void;
	logout: () => void;
};
