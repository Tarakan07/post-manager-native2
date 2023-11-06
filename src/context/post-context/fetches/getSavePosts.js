import AsyncStorage from "@react-native-async-storage/async-storage";
export const getSavePosts = async () => {
	const res = await AsyncStorage.getItem(`posts`)
		.then((posts) => (posts ? JSON.parse(posts) : null))
		.catch((e) => console.log(e));

	return res;
};
