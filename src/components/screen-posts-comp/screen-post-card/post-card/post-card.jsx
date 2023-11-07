import React from "react";
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { useAuth } from "../../../../context/auth-context/useAuth";
import { useNavigation } from "../../../../context/navigation-context/useNavigation";
import { usePosts } from "../../../../context/post-context/usePosts";
import THEME from "../../../../THEME";
import { VisibleImage } from "../../../../UTILS";
const PostCard = ({ post }) => {
	const { activeUser } = useAuth();
	const { deletePost, error } = usePosts();
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<VisibleImage style={styles.boxImage} source={post.image} />

			<View style={styles.boxInfo}>
				<Text style={styles.title}>{post.title}</Text>
				<Text style={styles.date}>{post.date}</Text>
			</View>
			<Text style={styles.content}>{post.content}</Text>
			{post.author && activeUser && (
				<>
					{error && <Text>{error}</Text>}
					{post.author && activeUser.email === post.author && (
						<View style={styles.wrapSettingPress}>
							<Pressable
								style={styles.pressSettings}
								onPress={() => navigation.navigate("CreatePost", { post })}
							>
								<Text>Update post</Text>
							</Pressable>
							<Pressable
								style={styles.pressSettings}
								onPress={() => {
									deletePost(post.id);
									navigation.navigate("Posts");
								}}
							>
								<Text>Delete post</Text>
							</Pressable>
						</View>
					)}
				</>
			)}
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
	wrapSettingPress: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
	},
	pressSettings: {
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 25,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});
export default PostCard;
