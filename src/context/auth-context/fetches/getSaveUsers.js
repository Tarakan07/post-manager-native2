import AsyncStorage from "@react-native-async-storage/async-storage";
export const getSaveUsers = async () => {
	const res = await AsyncStorage.getItem(`users`)
		.then((users) => JSON.parse(users))
		.catch((e) => console.log(e));
	return res;
};
