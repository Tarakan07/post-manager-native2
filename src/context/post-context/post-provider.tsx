import React, {
	createContext,
	useState,
	useMemo,
	useEffect,
	PropsWithChildren,
	FC,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../auth-context/useAuth";
import { fetchAddPost } from "./fetches/fetchAddPost";
import { fetchUpdatePost } from "./fetches/fetchUpdatePost";
import { fetchDeletePost } from "./fetches/fetchDeletePost";
import { fetchFilterPosts } from "./fetches/fetchFilterPosts";
import { TPostContext, TPosts, TUser } from "../type";

export const PostContext = createContext<TPostContext>({} as TPostContext);

export const PostProvider: FC<PropsWithChildren> = ({ children }) => {
	const [posts, setPosts] = useState<TPosts[] | null>(null);
	const [userPosts, setUserPosts] = useState<TPosts[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const { activeUser } = useAuth();
	useEffect(() => {
		const getPosts = async () => {
			const res = await AsyncStorage.getItem(`posts`);
			return res ? JSON.parse(res) : null;
		};

		getPosts().then((el) => (el ? setPosts(el.arrayPosts) : null));
	}, []);

	const addPost = async (post: TPosts) => {
		await fetchAddPost({ post, setPosts, setError });
	};
	const filterPosts = async (filter: boolean = false) => {
		fetchFilterPosts({ filter, activeUser, posts, setUserPosts });
	};
	const updatePost = async (updatePost: TPosts) => {
		await fetchUpdatePost({ updatePost, setPosts, setError });
	};

	const deletePost = async (id: string) => {
		await fetchDeletePost({ id, setPosts, setUserPosts, setError });
	};

	const values = useMemo(() => {
		return {
			posts,
			userPosts,
			error,
			addPost,
			updatePost,
			deletePost,
			filterPosts,
		};
	}, [posts, error, userPosts, activeUser]);

	return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};
