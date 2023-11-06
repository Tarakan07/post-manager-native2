import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import THEME from "../../../../THEME";
import PostItem from "../post-item";

const PostsList = () => {
	const data = [
		{
			id: 1,
			image:
				"https://user-images.githubusercontent.com/16062886/117443651-c13d9500-af38-11eb-888d-b6a0b580760c.png",
			title: "Ляляляя",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, beatae. Soluta quo ducimus praesentium obcaecati et beatae, vitae quod odio.",
			date: "02.03.2023",
			author: "lala@mail.ru",
		},
		{
			id: 2,
			image:
				"https://user-images.githubusercontent.com/16062886/117443651-c13d9500-af38-11eb-888d-b6a0b580760c.png",
			title: "Ляляляя",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, beatae. Soluta quo ducimus praesentium obcaecati et beatae, vitae quod odio.",
			date: "02.03.2023",
			author: "",
		},
		{
			id: 3,
			image:
				"https://user-images.githubusercontent.com/16062886/117443651-c13d9500-af38-11eb-888d-b6a0b580760c.png",
			title: "Ляляляя",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, beatae. Soluta quo ducimus praesentium obcaecati et beatae, vitae quod odio.",
			date: "02.03.2023",
			author: "lala@mail.ru",
		},
		{
			id: 4,
			image:
				"https://user-images.githubusercontent.com/16062886/117443651-c13d9500-af38-11eb-888d-b6a0b580760c.png",
			title: "Ляляляя",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, beatae. Soluta quo ducimus praesentium obcaecati et beatae, vitae quod odio.",
			date: "02.03.2023",
			author: "",
		},
	];
	return (
		<View style={styles.container}>
			<View>
				<Pressable>
					<Text>Show you're posts</Text>
				</Pressable>
			</View>
			{data.map((post) => {
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
	},
});
export default PostsList;
