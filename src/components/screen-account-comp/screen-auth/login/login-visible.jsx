import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

import { CreateInput } from "../../../../UTILS";

const LoginVisible = ({ dataForm, setData, sentForm, message, error }) => {
	return (
		<View style={styles.container}>
			<View style={styles.blockForm}>
				{error && <Text style={styles.textMessage}>{error}</Text>}
				{message && <Text style={styles.textMessage}>{message}</Text>}
				<View style={styles.form}>
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
					<View style={{ flexDirection: "row" }}>
						<Pressable
							style={styles.btnForm}
							onPress={() => sentForm(dataForm.data)}
						>
							<Text>Login</Text>
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
	wrapAnswer: {
		height: 30,
	},
	wrapAnswerText: {
		fontSize: 16,
	},
	form: { marginTop: 5, width: "100%" },
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
export default LoginVisible;
