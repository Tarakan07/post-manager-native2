import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Image,
} from "react-native";
import THEME from "../../../../THEME";

export const CreatePostVisible = ({
	changeSetPost,
	error,
	post,
	imagePick,
	save,
}) => {
	return (
		<View style={styles.container}>
			{error && <Text>{error}</Text>}
			<View style={styles.row}>
				<Text style={styles.title}>Title:</Text>
				<TextInput
					style={styles.field}
					value={post.title}
					onChangeText={(v) => changeSetPost({ v, key: "title" })}
				/>
			</View>
			<View style={styles.row}>
				<Text style={styles.content}>Content:</Text>
				<TextInput
					style={styles.field}
					value={post.content}
					onChangeText={(v) => changeSetPost({ v, key: "content" })}
				/>
			</View>
			<View style={styles.pressRow}>
				<Pressable
					onPress={() => imagePick.makeImage()}
					style={styles.pressImage}
				>
					<Text style={styles.pressText}>Make photo</Text>
				</Pressable>
				<Pressable
					onPress={() => imagePick.takeImage()}
					style={styles.pressImage}
				>
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
export default CreatePostVisible;
