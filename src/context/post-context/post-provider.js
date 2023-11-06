import React, {
	createContext,
	useState,
	useMemo,
	useEffect,
	useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../auth-context/useAuth";
import { fetchAddPost } from "./fetches/fetchAddPost";
import { fetchUpdatePost } from "./fetches/fetchUpdatePost";
import { fetchDeletePost } from "./fetches/fetchDeletePost";
import { fetchFilterPosts } from "./fetches/fetchFilterPosts";
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState(null);
	const [userPosts, setUserPosts] = useState(null);
	const [error, setError] = useState(null);
	const { activeUser } = useAuth();
	useEffect(() => {
		const getPosts = async () => {
			const res = await AsyncStorage.getItem(`posts`);
			return res ? JSON.parse(res) : null;
		};

		getPosts().then((el) => (el ? setPosts(el.arrayPosts) : null));
	}, []);

	const addPost = async (post) => {
		await fetchAddPost({ post, activeUser, setPosts, setError });
	};
	const filterPosts = async (filter = false) => {
		fetchFilterPosts({ filter, activeUser, posts, setUserPosts });
	};
	const updatePost = async (updatePost) => {
		await fetchUpdatePost({ updatePost, setPosts, setError });
	};

	const deletePost = async (id) => {
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
