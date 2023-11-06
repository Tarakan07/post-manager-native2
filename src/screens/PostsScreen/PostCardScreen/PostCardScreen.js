import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../../components/header";
import PostCard from "../../../components/screen-posts-comp/screen-post-card/post-card/post-card";
import { NavigationContext } from "../../../context/navigation-context/navigation-context";
const PostCardScreen = ({ route, navigation }) => {
	const { post } = route.params;

	return (
		<ScrollView>
			<NavigationContext.Provider value={navigation}>
				<Header title={post.title} />
				<PostCard post={post} />
			</NavigationContext.Provider>
		</ScrollView>
	);
};

export default PostCardScreen;
