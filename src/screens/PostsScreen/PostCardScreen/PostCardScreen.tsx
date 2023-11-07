import React, { FC } from "react";
import { ScrollView } from "react-native";
import Header from "../../../components/header";
import PostCard from "../../../components/screen-posts-comp/screen-post-card/post-card/post-card";
import { NavigationContext } from "../../../context/navigation-context/navigation-context";

import { TPosts } from "../../../context/type";
import { TScreenProps } from "../../type";
type RootStackParamList = {
	PostItem: { post: TPosts };
};
const PostCardScreen: FC<TScreenProps<RootStackParamList, "PostItem">> = ({
	route,
	navigation,
}) => {
	const { post } = route.params;

	return (
		<ScrollView>
			<NavigationContext.Provider value={navigation}>
				<Header title={post.title} navigation={navigation} />
				<PostCard post={post} />
			</NavigationContext.Provider>
		</ScrollView>
	);
};

export default PostCardScreen;
