import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../../../context/auth-context/useAuth";
import Profile from "../../../components/screen-account-comp/screen-profile/profile";
import Header from "../../../components/header";
const ProfileScreen = ({ navigation }) => {
	const { activeUser } = useAuth();

	return (
		<ScrollView style={styles.container}>
			<Header title={activeUser.name} navigation={navigation} />
			<Profile navigation={navigation} />
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default ProfileScreen;
