import React, { useState } from "react";
import {
	View,
	Text,
	Pressable,
	Image,
	Dimensions,
	StyleSheet,
} from "react-native";
import THEME from "../../../../THEME";
const PostCard = ({ post }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.boxImage}
				source={{
					uri: post.image,
				}}
			/>

			<View style={styles.boxInfo}>
				<Text style={styles.title}>{post.title}</Text>
				<Text style={styles.date}>{post.date}</Text>
			</View>
			<Text style={styles.content}>{post.content}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		flex: 1,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	boxImage: {
		borderRadius: 3,
		width: "100%",
		height: (Dimensions.get("screen").width * 0.95) / 1.6,
		objectFit: "cover",
	},
	boxInfo: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		color: THEME.colors.title,
		fontWeight: "400",
		fontSize: 18,
	},
	date: {
		color: THEME.colors.defaultText,

		fontSize: 12,
	},
	content: {
		fontSize: 14,
		color: THEME.colors.defaultText,
	},
});
export default PostCard;
