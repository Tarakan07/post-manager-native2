import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "../../../../context/navigation-context/useNavigation";
import { useAuth } from "../../../../context/auth-context/useAuth";
import THEME from "../../../../THEME";
import { usePosts } from "../../../../context/post-context/usePosts";
const PostsListHeader = () => {
	const navigation = useNavigation();
	const { activeUser } = useAuth();
	const [showUserPost, setUserPost] = useState(false);
	const { posts, filterPosts } = usePosts();
	return (
		<View style={styles.container}>
			{activeUser ? (
				<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
					<Pressable
						onPress={() => navigation.navigate("CreatePost")}
						style={styles.press}
					>
						<Text>Create Post</Text>
					</Pressable>
					{posts && posts.length !== 0 && (
						<Pressable
							style={styles.press}
							onPress={() => {
								setUserPost((prev) => !prev);
								filterPosts(!showUserPost);
							}}
						>
							<Text>
								{showUserPost ? "Show all posts" : `Show you're posts`}
							</Text>
						</Pressable>
					)}
				</View>
			) : (
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Pressable
						onPress={() => navigation.navigate("Account")}
						style={styles.press}
					>
						<Text>Register to add posts</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
		marginBottom: 20,
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
	},
	press: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderWidth: 1,
		borderRadius: 25,
	},
});
export default PostsListHeader;
