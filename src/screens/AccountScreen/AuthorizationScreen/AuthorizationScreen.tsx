import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../../../components/header";
import THEME from "../../../THEME";
import { TScreenProps } from "../../type";

const AuthorizationScreen: FC<any> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title={"Authorization"} navigation={navigation} back={false} />
			<View style={styles.wrap}>
				<Pressable
					style={styles.press}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={styles.pressTitle}>Login</Text>
				</Pressable>

				<Pressable
					style={styles.press}
					onPress={() => navigation.navigate("Registration")}
				>
					<Text style={styles.pressTitle}>Registration</Text>
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center" },
	wrap: {
		marginTop: "20%",
		width: "45%",
	},
	press: {
		marginTop: 20,
		borderColor: THEME.colors.title,
		borderWidth: 1,
		borderRadius: 20,
	},
	pressTitle: {
		textAlign: "center",
		fontSize: 20,
		color: THEME.colors.title,
	},
});
export default AuthorizationScreen;
