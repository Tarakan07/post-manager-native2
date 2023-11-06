import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSaveUsers } from "./getSaveUsers";
export const fetchAuthorization = async ({ user, setError, setActiveUser }) => {
	setError(null);
	try {
		const saveUsers = await getSaveUsers();
		if (saveUsers) {
			const saveUser = saveUsers.arrayUsers.find(
				(us) => us.email == user.email.toLowerCase()
			);
			if (saveUser && saveUser.password === user.password) {
				await AsyncStorage.setItem("active_user", JSON.stringify(saveUser));
				setActiveUser(saveUser);
			} else {
				setError("Wrong login or password");
			}
		} else {
			setError("User does not exist!");
		}
	} catch (error) {
		setError("Error auth");
	}
};
