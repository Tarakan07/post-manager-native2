import Header from "../../components/header/header";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import PostsList from "../../components/screen-posts-comp/screen-posts-main/posts-list";
import { NavigationContext } from "../../context/navigation-context";
const PostsScreen = ({ navigation }) => (
	<ScrollView>
		<NavigationContext.Provider value={navigation}>
			<Header title={"Posts"} />
			<PostsList navigation={navigation} />
		</NavigationContext.Provider>
	</ScrollView>
);

export default PostsScreen;
