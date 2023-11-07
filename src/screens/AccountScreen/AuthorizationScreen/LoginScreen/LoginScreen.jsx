import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../../../components/header";
import Login from "../../../../components/screen-account-comp/screen-auth/login";
const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title={"Login"} navigation={navigation} />
			<Login navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default LoginScreen;
