import React, {
	createContext,
	useState,
	useMemo,
	useEffect,
	FC,
	PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchRegistration } from "./fetches/fetchRegistration";
import { fetchAuthorization } from "./fetches/fetchAuthorization";
import { fetchUpdateData } from "./fetches/fetchUpdateData";
import { fetchLogout } from "./fetches/fetchLogout";
import { TUser, TAuthContext } from "../type";

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [activeUser, setActiveUser] = useState<TUser>(null);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const getActiveUser = async () => {
			try {
				const res = await AsyncStorage.getItem(`active_user`);

				return res ? JSON.parse(res) : null;
			} catch (error) {
				setError("Unknown error");
			}
		};

		getActiveUser().then((user: TUser) => setActiveUser(user));
	}, []);

	const registration = async (user: TUser) => {
		await fetchRegistration({ user, setError, setActiveUser });
	};

	const authorization = async (user: TUser) => {
		await fetchAuthorization({ user, setError, setActiveUser });
	};
	const updateData = async (user: TUser) => {
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
