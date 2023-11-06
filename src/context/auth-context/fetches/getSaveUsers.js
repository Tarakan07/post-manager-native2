import AsyncStorage from "@react-native-async-storage/async-storage";
export const getSaveUsers = async () => {
	const res = await AsyncStorage.getItem(`users`)
		.then((users) => (users ? JSON.parse(users) : null))
		.catch((e) => console.log(e));
	return res;
};
