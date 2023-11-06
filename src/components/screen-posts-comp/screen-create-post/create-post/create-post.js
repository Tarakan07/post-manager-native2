import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import THEME from "../../../../THEME";
import { useNavigation } from "../../../../context/navigation-context/useNavigation";
import { usePosts } from "../../../../context/post-context/usePosts";
import { useAuth } from "../../../../context/auth-context/useAuth";
const CreatePost = ({ updatePost }) => {
	const { title = "", content = "", image = null } = updatePost;
	const navigation = useNavigation();
	const {
		addPost: fetchAddPost,
		updatePost: fetchUpdatePost,
		error,
	} = usePosts();
	const { activeUser } = useAuth();

	const [post, setPost] = useState({ title, content, image });

	const makeImage = async () => {
		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [5, 3],
			quality: 0.6,
		});

		if (!result.canceled) {
			setPost((prev) => ({ ...prev, image: result.assets[0].uri }));
		}
	};
	const takeImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [5, 3],
			quality: 0.6,
		});

		if (!result.canceled) {
			setPost((prev) => ({ ...prev, image: result.assets[0].uri }));
		}
	};

	const save = () => {
		if (!post.title || !post.content || error) return;

		if (updatePost.id) {
			fetchUpdatePost({
				id: updatePost.id,
				author: updatePost.author,
				...post,
			});
		} else {
			fetchAddPost({
				id: Date.now(),
				...post,
				author: activeUser.email,
			});
		}

		setTimeout(() => {
			navigation.navigate("Posts");
		}, 1000);
	};

	return (
		<View style={styles.container}>
			{error && <Text>{error}</Text>}
			<View style={styles.row}>
				<Text style={styles.title}>Title:</Text>
				<TextInput
					style={styles.field}
					value={post.title}
					onChangeText={(v) => setPost((prev) => ({ ...prev, title: v }))}
				/>
			</View>
			<View style={styles.row}>
				<Text style={styles.content}>Content:</Text>
				<TextInput
					style={styles.field}
					value={post.content}
					onChangeText={(v) => setPost((prev) => ({ ...prev, content: v }))}
				/>
			</View>
			<View style={styles.pressRow}>
				<Pressable onPress={makeImage} style={styles.pressImage}>
					<Text style={styles.pressText}>Make photo</Text>
				</Pressable>
				<Pressable onPress={takeImage} style={styles.pressImage}>
					<Text style={styles.pressText}>Take photo</Text>
				</Pressable>
			</View>
			<View style={styles.wrap_image}>
				{post.image && (
					<Image source={{ uri: post.image }} style={styles.image} />
				)}
			</View>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 30,
				}}
			>
				<Pressable style={styles.pressImage} onPress={save}>
					<Text>Save</Text>
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
		marginTop: 20,
	},
	row: {
		marginBottom: 15,
	},
	field: {
		borderBottomWidth: 1,
		borderBottomColor: "#000",
	},
	wrap_image: {
		marginTop: 20,
	},
	image: {
		width: "100%",
		height: 200,

		resizeMode: "contain",
	},
	pressRow: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	pressImage: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderColor: THEME.colors.title,
		borderRadius: 25,
		borderWidth: 1,
	},
});
export default CreatePost;
