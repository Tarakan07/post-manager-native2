import { getSaveUsers } from "./getSaveUsers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const createArrayUsers = async ({ user, saveUsers }) => {
	const arrayUsers = [
		...saveUsers.arrayUsers,
		{ ...user, email: user.email.toLowerCase() },
	];

	await AsyncStorage.setItem("users", JSON.stringify({ arrayUsers }));
	await AsyncStorage.setItem("active_user", JSON.stringify(user));
};

export const fetchRegistration = async ({ user, setError, setActiveUser }) => {
	setError(null);

	try {
		const saveUsers = await getSaveUsers();

		if (saveUsers) {
			const saveUser = saveUsers.arrayUsers.find(
				(us) => us.email === user.email.toLowerCase()
			);

			if (saveUser) {
				setError("User exists!");
			} else {
				await createArrayUsers({ user, saveUsers });
				setActiveUser(user);
			}
		} else {
			await createArrayUsers({ user, saveUsers });
			setActiveUser(user);
		}
	} catch (error) {
		setError("Error reg");
	}
};
