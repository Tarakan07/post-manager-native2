import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => (
	<View style={styles.container}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#51D3B7",
		height: 50,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "500",
	},
});
export default Header;
