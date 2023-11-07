import React, { useState, FC, Dispatch, SetStateAction } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	KeyboardTypeOptions,
} from "react-native";
import THEME from "../THEME";

type TProps = {
	change?: boolean;
	initValue?: string;
	title: string;
	keyData: string;
	type: KeyboardTypeOptions;
	secureText?: boolean;
	setData: (keyData: string, val: string) => void;
	error: string[];
};

const CreateInput: FC<TProps> = ({
	change = true,
	initValue = "",
	secureText = false,
	title,
	keyData,
	type,
	setData,
	error,
}) => {
	const [value, setValue] = useState<string>(initValue);
	const errorField = error.indexOf(keyData) > -1 ? true : false;
	const getValue = (val: string) => {
		setValue(val);
		setData(keyData, val);
	};

	return (
		<>
			<Text style={styles.rowTitle}>{title}</Text>
			{change ? (
				<TextInput
					keyboardType={type}
					secureTextEntry={secureText}
					autoCorrect={false}
					onChangeText={getValue}
					style={[
						styles.rowInput,
						errorField ? styles.rowInputError : { borderColor: "transparent" },
					]}
					autoFocus={false}
					value={value}
				/>
			) : (
				<Text style={styles.rowText}>{value}</Text>
			)}
		</>
	);
};
const styles = StyleSheet.create({
	rowTitle: {
		color: THEME.colors.defaultText,

		fontSize: 14,
	},
	rowInput: {
		marginTop: 4,
		paddingVertical: 11,
		paddingHorizontal: 12,
		fontSize: 14,

		borderWidth: 1,
		borderRadius: 3,
		borderColor: THEME.colors.title,
	},
	rowText: {
		marginTop: 4,
		fontSize: 14,

		paddingVertical: 3,
		paddingHorizontal: 5,
	},
	rowInputError: {
		borderColor: "red",
	},
});
export default CreateInput;
