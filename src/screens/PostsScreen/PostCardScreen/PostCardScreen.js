import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../../components/header";
import PostCard from "../../../components/screen-posts-comp/screen-post-card/post-card/post-card";

const PostCardScreen = ({ route }) => {
	const { post } = route.params;

	return (
		<ScrollView>
			<Header title={post.title} />
			<PostCard post={post} />
		</ScrollView>
	);
};

export default PostCardScreen;
