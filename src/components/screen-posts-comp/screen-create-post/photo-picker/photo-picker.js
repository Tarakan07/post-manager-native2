import React, { useState, Linking } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import THEME from "../../../../THEME";

const PhotoPicker = ({ pickImage, image }) => {
	return (
		<View style={styles.container}>
			<View style={styles.wrap}>
				<View style={styles.wrap_pressable}>
					<Pressable
						style={({ pressed }) => styles.pressable(pressed)}
						onPress={pickImage}
					>
						<Text style={styles.pressText}>Take photo</Text>
					</Pressable>
				</View>
				<View style={styles.wrap_image}>
					{image && <Image source={{ uri: image }} style={styles.image} />}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	wrap: {},
	wrap_pressable: {
		justifyContent: "center",
		width: "100%",
		flexDirection: "row",
	},
	pressable: (pressed) => ({
		width: "40%",
		paddingVertical: 10,
		paddingHorizontal: 14,
		backgroundColor: "transparent",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: pressed ? THEME.colors.title : "#000",
		borderRadius: 10,
		justifyContent: "center",
	}),
	pressText: {
		textAlign: "center",
		color: THEME.colors.title,
	},
	wrap_image: {
		marginTop: 20,
	},
	image: {
		width: "100%",
		height: 200,

		resizeMode: "contain",
	},
});
export default PhotoPicker;
