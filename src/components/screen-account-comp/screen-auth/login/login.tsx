import React, { FC, useEffect, useState } from "react";

import { validation } from "../../../../UTILS";

import LoginVisible from "./login-visible";
import { useAuth } from "../../../../context/auth-context/useAuth";
import { TSetDataForm } from "../type";
import { TUser } from "../../../../context/type";
const Login: FC<any> = ({ navigation }) => {
	const { authorization, error, activeUser } = useAuth();

	const initState = {
		data: {
			email: "",
			password: "",
		},
		error: [],
	};

	const [dataForm, setDataForm] = useState<TSetDataForm>(
		initState as TSetDataForm
	);
	const [message, setMessage] = useState<string | null>(null);
	useEffect(() => {
		if (activeUser && !error) {
			setMessage(`Добро пожаловать,${activeUser.name}!`);
			setTimeout(() => {
				navigation.navigate("Account");
			}, 1500);
		}
	}, [activeUser, error]);
	const setData = (keyData: string, value: string) => {
		//set data on key field
		setDataForm((prev) => ({
			...prev,
			data: {
				...dataForm.data!,
				[keyData]: value,
			},
		}));
	};

	const sentForm = (data: TUser) => {
		//if have errors - change state
		if (validation(data).hasErrors) {
			setDataForm((prev) => ({
				...prev,
				error: validation(data).errors,
			}));
			return;
		}
		// else all ok, change state
		setDataForm((prev) => ({
			...prev,
			error: validation(data).errors,
		}));
		authorization(dataForm.data);
		// fetchAuthorization(dataForm.data);
	};

	return (
		<LoginVisible
			message={message}
			dataForm={dataForm}
			setData={setData}
			sentForm={sentForm}
		/>
	);
};

export default Login;
