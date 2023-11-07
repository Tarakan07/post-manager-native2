import React, { useEffect, useState, FC } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { Props } from "react-native-paper";

type TProps = {
	style: StyleProp<ImageStyle>;
	source: string;
};
type TSrc = {
	uri: string;
};
const VisibleImage: FC<TProps> = ({ style, source }) => {
	const [src, setSrc] = useState<TSrc>({ uri: source } as TSrc);
	useEffect(() => {
		setSrc((prev) => ({ uri: source }));
	}, [source]);
	const defaultImg = { img: require("../../assets/images/default.jpg") };

	return (
		<Image
			style={style}
			source={src}
			onLoad={({
				nativeEvent: {
					source: { width, height },
				},
			}) => (width == 1 && height == 1 ? setSrc(defaultImg.img) : "")}
		/>
	);
};

export default VisibleImage;
