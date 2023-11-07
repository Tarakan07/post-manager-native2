import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAuth } from "../../../../context/auth-context/useAuth";
import THEME from "../../../../THEME";
import { CreateInput } from "../../../../UTILS";
import { validation } from "../../../../UTILS";
type TData = {
	name: string;
	email: string;
};
type TSetDataForm = {
	data: TData;
	error: Array<string>;
};
const Profile: FC = () => {
	const { activeUser, updateData, logout } = useAuth();
	// const { name, email } = activeUser;

	const initState = {
		data: {
			name: activeUser?.name,
			email: activeUser?.email,
		},
		error: [],
	};
	const [dataForm, setDataForm] = useState<TSetDataForm>(
		initState as TSetDataForm
	);
	const [edit, setEdit] = useState(false);
	const setData = (keyData: string, value: string) => {
		//set data on key field
		setDataForm((prev) => ({
			...prev,
			data: {
				...dataForm.data,
				[keyData]: value,
			},
		}));
	};

	const sentForm = (data: TData) => {
		if (validation(data).hasErrors) {
			setDataForm((prev) => ({
				...prev,
				error: validation(data).errors,
			}));
			return;
		}

		setDataForm((prev) => ({
			...prev,
			error: validation(data).errors,
		}));
		updateData(dataForm.data);
		setEdit(false);
	};
	return (
		<View style={styles.container}>
			<View>
				<View style={{ flexDirection: "row" }}>
					<Pressable
						style={styles.pressEdit}
						onPress={() => {
							if (edit) {
								setEdit(false);
							} else {
								setEdit(true);
							}
						}}
					>
						<Text>{edit ? "Cancel" : "Edit information?"}</Text>
					</Pressable>
				</View>
				<View>
					<View>
						<CreateInput
							title={"Email"}
							keyData={"email"}
							type={"email-address"}
							setData={setData}
							error={dataForm.error}
							initValue={dataForm.data.email}
							change={false}
						/>
					</View>
					<View>
						<CreateInput
							title={"Name"}
							keyData={"name"}
							type={"default"}
							setData={setData}
							error={dataForm.error}
							change={edit}
							initValue={dataForm.data.name}
						/>
					</View>
				</View>
				{edit && (
					<View style={{ flexDirection: "row" }}>
						<Pressable
							style={styles.pressSave}
							onPress={() => {
								sentForm(dataForm.data);
							}}
						>
							<Text>Save</Text>
						</Pressable>
					</View>
				)}

				<View style={{ flexDirection: "row" }}>
					<Pressable style={styles.pressLogout} onPress={() => logout()}>
						<Text style={styles.pressLogoutText}>Logout</Text>
					</Pressable>
				</View>
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
	pressEdit: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderColor: "#000",
		borderRadius: 20,
		borderWidth: 1,
		marginBottom: 15,
	},
	pressLogout: {
		marginTop: 50,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderColor: "red",
		borderRadius: 20,

		borderWidth: 1,
	},
	pressSave: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderColor: "#000",
		borderRadius: 20,
		borderWidth: 1,
		marginTop: 15,
	},
	pressLogoutText: {
		color: "red",
	},
});
export default Profile;
