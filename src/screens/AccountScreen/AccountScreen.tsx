import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import AuthorizationScreen from "./AuthorizationScreen";
import ProfileScreen from "./ProfileScreen";
import { useAuth } from "../../context/auth-context/useAuth";
import { TScreenProps } from "../type";
type RootStackParamList = {
	Account: undefined;
};
const AccountScreen: FC<TScreenProps<RootStackParamList, "Account">> = ({
	navigation,
}) => {
	const { activeUser } = useAuth();
	const visible = activeUser ? (
		<ProfileScreen navigation={navigation} />
	) : (
		<AuthorizationScreen navigation={navigation} />
	);

	return (
		<View style={[styles.container, { flex: activeUser ? 1 : 1 }]}>
			{visible}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,

		paddingBottom: 10,
	},
});

export default AccountScreen;
