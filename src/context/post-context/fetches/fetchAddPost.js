import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSavePosts } from "./getSavePosts";
export const fetchAddPost = async ({ post, setPosts, setError }) => {
	setError(null);
	try {
		const savePosts = await getSavePosts();

		if (savePosts) {
			const arrayPosts = [post, ...savePosts.arrayPosts];
			await AsyncStorage.setItem("posts", JSON.stringify({ arrayPosts }));
			setPosts(arrayPosts);
		} else {
			const arrayPosts = [post];
			await AsyncStorage.setItem("posts", JSON.stringify({ arrayPosts }));
			setPosts(arrayPosts);
		}
	} catch (error) {
		setError("Error add post");
	}
};
