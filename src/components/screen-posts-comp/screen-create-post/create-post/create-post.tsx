import React, { FC, useState } from "react";

import * as ImagePicker from "expo-image-picker";

import { useNavigation } from "../../../../context/navigation-context/useNavigation";
import { usePosts } from "../../../../context/post-context/usePosts";
import { useAuth } from "../../../../context/auth-context/useAuth";
import { CreatePostVisible } from "./create-post-visible";
import { TPosts } from "../../../../context/type";
import { TSetPost, TPCreatePost } from "./type";

const CreatePost: FC<TPCreatePost> = ({ updatePost }) => {
	const { title = "", content = "", image = null } = updatePost;
	const navigation = useNavigation();
	const {
		addPost: fetchAddPost,
		updatePost: fetchUpdatePost,
		error,
	} = usePosts();
	const { activeUser } = useAuth();

	const [post, setPost] = useState<TSetPost>({ title, content, image });

	const changeSetPost = ({ v, key }: { v: string; key: string }) => {
		setPost((prev) => ({ ...prev, [key]: v }));
	};

	const makeImage = async () => {
		let result: ImagePicker.ImagePickerResult =
			await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [5, 3],
				quality: 0.6,
			});

		if (!result.canceled) {
			setPost((prev) => ({
				...prev,
				image: result.assets ? result.assets[0].uri : null,
			}));
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
			setPost((prev) => ({
				...prev,
				image: result.assets ? result.assets[0].uri : null,
			}));
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
				id: Date.now().toString(),
				...post,
				author: activeUser!.email,
			});
		}

		setTimeout(() => {
			navigation.navigate("Posts");
		}, 1000);
	};

	return (
		<CreatePostVisible
			post={post}
			error={error}
			changeSetPost={changeSetPost}
			imagePick={{ makeImage, takeImage }}
			save={save}
		/>
	);
};

export default CreatePost;
