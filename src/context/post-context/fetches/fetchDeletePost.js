import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSavePosts } from "./getSavePosts";
export const fetchDeletePost = async ({
	id,
	setPosts,
	setUserPosts,
	setError,
}) => {
	setError(null);
	try {
		const savePosts = await getSavePosts();

		const indexPost = savePosts.arrayPosts.findIndex((post) => post.id === id);
		const arrayPosts = [
			...savePosts.arrayPosts.slice(0, indexPost),
			...savePosts.arrayPosts.slice(indexPost + 1),
		];
		if (arrayPosts.length !== 0) {
			await AsyncStorage.setItem("posts", JSON.stringify({ arrayPosts }));
			setPosts(arrayPosts);
		} else {
			await AsyncStorage.removeItem("posts");
			setPosts(null);
			setUserPosts(null);
		}
	} catch (error) {
		setError("Error delete post");
	}
};
