import React from "react";
import { View, StyleSheet } from "react-native";
import AuthorizationScreen from "./AuthorizationScreen";
import ProfileScreen from "./ProfileScreen";
import { useAuth } from "../../context/useAuth";
const AccountScreen = ({ navigation }) => {
	const { activeUser } = useAuth();
	const visible = activeUser ? (
		<ProfileScreen navigation={navigation} />
	) : (
		<AuthorizationScreen navigation={navigation} style={{ flex: 1 }} />
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
