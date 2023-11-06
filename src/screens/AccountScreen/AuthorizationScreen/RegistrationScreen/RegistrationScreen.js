import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../../../components/header";
import Registration from "../../../../components/screen-account-comp/screen-auth/registration";
const RegistrationScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title={"Registration"} />
			<Registration navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default RegistrationScreen;
