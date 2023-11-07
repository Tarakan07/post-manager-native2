import { TPosts } from "../../../../context/type";

export type TSetPost = {
	title: string;
	content: string;
	image: string | null;
};

export type TPCreatePost = {
	updatePost: TPosts;
};

export type TPCreatePostVisible = {
	changeSetPost: ({ v, key }: { v: string; key: string }) => void;
	error: string | null;
	post: TSetPost;
	imagePick: {
		makeImage: () => void;
		takeImage: () => void;
	};
	save: () => void;
};
