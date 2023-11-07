import React, { FC } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
type THeaderPr = {
	title: string;
	navigation: any;
	back?: boolean;
};
const Header: FC<THeaderPr> = ({ title, navigation, back = true }) => (
	<View style={styles.container}>
		{back && (
			<View style={styles.back}>
				<Pressable onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</Pressable>
			</View>
		)}

		<Text style={styles.title}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		position: "relative",
		backgroundColor: "#51D3B7",
		height: 50,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	back: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		left: 20,
		width: 40,
		height: "100%",
	},
	title: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "500",
	},
});
export default Header;
