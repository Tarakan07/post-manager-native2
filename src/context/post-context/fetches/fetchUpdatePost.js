import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchUpdatePost = async ({ updatePost, setPosts, setError }) => {
	setError(null);
	try {
		const savePosts = await AsyncStorage.getItem(`posts`)
			.then((posts) => JSON.parse(posts))
			.catch((e) => console.log(e));

		const indexPost = savePosts.arrayPosts.findIndex(
			(post) => post.id === updatePost.id
		);
		const arrayPosts = [
			...savePosts.arrayPosts.slice(0, indexPost),
			{ ...savePosts.arrayPosts[indexPost], ...updatePost },
			...savePosts.arrayPosts.slice(indexPost + 1),
		];
		await AsyncStorage.setItem("posts", JSON.stringify({ arrayPosts }));
		setPosts(arrayPosts);
	} catch (error) {
		setError("Error update post");
	}
};
