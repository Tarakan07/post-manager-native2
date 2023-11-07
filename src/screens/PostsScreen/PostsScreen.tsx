import Header from "../../components/header/header";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import PostsList from "../../components/screen-posts-comp/screen-posts-main/posts-list";
import { NavigationContext } from "../../context/navigation-context/navigation-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TScreenProps } from "../type";
type RootStackParamList = {
	Posts: undefined;
};

const PostsScreen: FC<TScreenProps<RootStackParamList, "Posts">> = ({
	navigation,
}) => (
	<ScrollView>
		<NavigationContext.Provider value={navigation}>
			<Header title={"Posts"} navigation={navigation} back={false} />
			<PostsList />
		</NavigationContext.Provider>
	</ScrollView>
);

export default PostsScreen;
