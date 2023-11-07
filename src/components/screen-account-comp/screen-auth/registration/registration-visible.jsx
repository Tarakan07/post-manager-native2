import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { CreateInput } from "../../../../UTILS";

import { THEME } from "../../../../THEME";

const RegistrationVisible = ({
	message,
	sentForm,
	setData,
	dataForm,
	error,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.blockForm}>
				<View style={styles.form}>
					{error && <Text style={styles.textMessage}>{error}</Text>}
					{message && <Text style={styles.textMessage}>{message}</Text>}
					<View style={styles.row}>
						<CreateInput
							title={"Имя"}
							keyData={"name"}
							type={"default"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<View style={styles.row}>
						<CreateInput
							title={"Email"}
							keyData={"email"}
							type={"email-address"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<View style={styles.row}>
						<CreateInput
							title={"Пароль"}
							keyData={"password"}
							type={"default"}
							secureText={true}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<View style={styles.row}>
						<CreateInput
							title={"Пароль"}
							keyData={"passwordRepeat"}
							type={"password"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Pressable
							style={styles.btnForm}
							onPress={() => sentForm(dataForm.data)}
						>
							<Text>Register</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
	},
	blockForm: {
		alignItems: "center",
	},

	textMessage: {
		textAlign: "center",
		color: THEME.colors.defaultText,
		fontSize: 16,
	},
	form: { marginTop: 25, width: "100%" },
	row: { marginTop: 8, width: "100%" },
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
		borderColor: THEME.colors.green,
	},
	btnForm: {
		marginTop: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 25,
	},
});
export default RegistrationVisible;
