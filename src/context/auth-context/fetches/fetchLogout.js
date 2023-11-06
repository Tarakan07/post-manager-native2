import AsyncStorage from "@react-native-async-storage/async-storage";
export const fetchLogout = async ({ setActiveUser }) => {
	await AsyncStorage.removeItem("active_user", () => {
		setActiveUser(null);
	});
};
