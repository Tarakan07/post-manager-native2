import { useContext } from "react";
import { PostContext } from "./post-provider";

export const usePosts = () => {
	const context = useContext(PostContext);
	return context;
};
