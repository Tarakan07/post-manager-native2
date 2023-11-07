import AsyncStorage from "@react-native-async-storage/async-storage";
import { TSetState, TUser } from "../../type";

export const fetchLogout = async ({
	setActiveUser,
}: {
	setActiveUser: TSetState<TUser>;
}) => {
	await AsyncStorage.removeItem("active_user", () => {
		setActiveUser(null);
	});
};
