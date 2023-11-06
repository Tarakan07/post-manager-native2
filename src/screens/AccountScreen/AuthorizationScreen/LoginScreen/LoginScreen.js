import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../../../components/header";
import Login from "../../../../components/screen-account-comp/screen-auth/login";
const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title={"Login"} />
			<Login navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default LoginScreen;
