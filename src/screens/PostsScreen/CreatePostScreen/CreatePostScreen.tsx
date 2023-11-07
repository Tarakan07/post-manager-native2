import React, { FC } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../../../components/header";
import CreatePost from "../../../components/screen-posts-comp/screen-create-post/create-post";
import { NavigationContext } from "../../../context/navigation-context/navigation-context";
import { TScreenProps } from "../../type";
type RootStackParamList = {
	CreatePost: { post: any };
};

const CreatePostScreen: FC<TScreenProps<RootStackParamList, "CreatePost">> = ({
	navigation,
	route,
}) => {
	const updatePost = route.params ? route.params.post : {};
	return (
		<ScrollView style={styles.container}>
			<NavigationContext.Provider value={navigation}>
				<Header title={"Create post"} navigation={navigation} />
				<CreatePost updatePost={updatePost} />
			</NavigationContext.Provider>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default CreatePostScreen;
