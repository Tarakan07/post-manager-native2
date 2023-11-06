import React, { createContext, useState, useMemo, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchRegistration } from "./fetches/fetchRegistration";
import { fetchAuthorization } from "./fetches/fetchAuthorization";
import { fetchUpdateData } from "./fetches/fetchUpdateData";
import { fetchLogout } from "./fetches/fetchLogout";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [activeUser, setActiveUser] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getActiveUser = async () => {
			try {
				const res = await AsyncStorage.getItem(`active_user`);

				return res ? JSON.parse(res) : null;
			} catch (error) {
				setError("Unknown error");
			}
		};

		getActiveUser().then((user) => setActiveUser(user));
	}, []);

	const registration = async (user) => {
		await fetchRegistration({ user, setError, setActiveUser });
	};

	const authorization = async (user) => {
		await fetchAuthorization({ user, setError, setActiveUser });
	};
	const updateData = async (user) => {
		await fetchUpdateData({ user, activeUser, setError, setActiveUser });
	};
	const logout = async () => {
		await fetchLogout({ setActiveUser });
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
