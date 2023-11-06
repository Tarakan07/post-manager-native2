import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSaveUsers } from "./getSaveUsers";

export const fetchUpdateData = async ({
	user,
	setError,
	setActiveUser,
	activeUser,
}) => {
	setError(null);
	try {
		const saveUsers = await getSaveUsers();
		const indexUpdate = saveUsers.arrayUsers.findIndex(
			(user) => user.email === user.email.toLowerCase()
		);
		const arrayUsers = [
			...saveUsers.arrayUsers.slice(0, indexUpdate),
			{
				...activeUser,
				email: user.email,
				name: user.name,
			},
			...saveUsers.arrayUsers.slice(indexUpdate + 1),
		];
		await AsyncStorage.setItem("users", JSON.stringify({ arrayUsers }));

		await AsyncStorage.mergeItem(
			"active_user",
			JSON.stringify(user),
			setActiveUser(user)
		);
	} catch (error) {
		setError("Error update");
	}
};
