import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import THEME from "../../../../THEME";
import PostItem from "../post-item";
import { usePosts } from "../../../../context/post-context/usePosts";
import PostsListHeader from "../posts-list-header";
import { TPosts } from "../../../../context/type";
const PostsList: FC = () => {
	const { posts, userPosts, error } = usePosts();

	if (error) {
		return <Text>{error}</Text>;
	}
	if (!posts || posts.length === 0) {
		return (
			<View style={{ marginTop: 20 }}>
				<Text style={{ textAlign: "center" }}>No posts{`(`}</Text>
				<PostsListHeader />
			</View>
		);
	}
	const visiblePosts: TPosts[] = userPosts ? userPosts : posts;

	return (
		<View style={styles.container}>
			<PostsListHeader />
			{visiblePosts.map((post) => {
				return (
					<View key={post.id}>
						<PostItem post={post} />
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		paddingHorizontal: THEME.paddingHorizontal,
		marginBottom: 50,
	},
});
export default PostsList;
