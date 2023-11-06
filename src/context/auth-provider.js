import React, {
	createContext,
	useState,
	useMemo,
	useEffect,
	useRef,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [activeUser, setActiveUser] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getActiveUser = async () => {
			const res = await AsyncStorage.getItem(`active_user`);

			return res ? JSON.parse(res) : null;
		};

		getActiveUser().then((user) => setActiveUser(user));
	}, []);
	const registration = async (user) => {
		setError(null);
		const saveUsers = await AsyncStorage.getItem(`users`)
			.then((el) => JSON.parse(el))
			.catch((e) => console.log(e));

		if (saveUsers) {
			const saveUser = saveUsers.arrayUsers.find(
				(us) => us.email.toLowerCase() === user.email.toLowerCase()
			);

			if (saveUser) {
				setError("User exists!");
			} else {
				const arrayUsers = [...saveUsers.arrayUsers, user];

				await AsyncStorage.setItem("users", JSON.stringify({ arrayUsers }));
				await AsyncStorage.setItem("active_user", JSON.stringify(user));
				setActiveUser(user);
			}
		} else {
			const arrayUsers = [...saveUsers.arrayUsers, user];
			await AsyncStorage.setItem("users", JSON.stringify({ arrayUsers }));
			await AsyncStorage.setItem("active_user", JSON.stringify(user));
			setActiveUser(user);
		}
	};
	const authorization = async (user) => {
		setError(null);
		const saveUsers = await AsyncStorage.getItem(`users`)
			.then((el) => JSON.parse(el))
			.catch((e) => console.log(e));
		if (saveUsers) {
			const saveUser = saveUsers.arrayUsers.find(
				(us) => us.email.toLowerCase() == user.email.toLowerCase()
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
	};
	const updateData = async (user) => {
		const saveUsers = await AsyncStorage.getItem(`users`)
			.then((el) => JSON.parse(el))
			.catch((e) => console.log(e));
		const indexUpdate = saveUsers.arrayUsers.findIndex(
			(user) => user.email.toLowerCase() === user.email.toLowerCase()
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
	};
	const logout = async () => {
		await AsyncStorage.removeItem("active_user", () => {
			setActiveUser(null);
		});
	};
	const values = useMemo(() => {
		return {
			activeUser,
			error,
			updateData,
			registration,
			authorization,
			logout,
		};
	}, [activeUser, error]);
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
