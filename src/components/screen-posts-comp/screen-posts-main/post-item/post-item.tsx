import React, { FC } from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from "../../../../context/navigation-context/useNavigation";
import { VisibleImage } from "../../../../UTILS";
import THEME from "../../../../THEME";
import { TPosts } from "../../../../context/type";
type TPr = {
	post: TPosts;
};
const PostItem: FC<TPr> = ({ post }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.box}>
			<Pressable
				onPress={() =>
					navigation.navigate("PostItem", {
						post,
					})
				}
			>
				<VisibleImage style={styles.boxImage} source={post.image} />
			</Pressable>
			<View style={styles.boxInfo}>
				<Text style={styles.title}>
					{post.title} {post.author && `(Author: ${post.author})`}
				</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	box: {
		width: "100%",
		marginBottom: 30,
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
});
export default PostItem;
