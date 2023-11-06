import React, { useEffect, useState } from "react";

import { validation } from "../../../../UTILS";

import LoginVisible from "./login-visible";
import { useAuth } from "../../../../context/useAuth";
const Login = ({ navigation }) => {
	const { authorization, error, activeUser } = useAuth();

	const initState = {
		data: {
			email: "",
			password: "",
		},
		error: [],
	};

	const [dataForm, setDataForm] = useState(initState);
	const [message, setMessage] = useState(null);
	useEffect(() => {
		if (activeUser && !error) {
			setMessage(`Добро пожаловать,${activeUser.name}!`);
			setTimeout(() => {
				navigation.navigate("Account");
			}, 1500);
		}
	}, [activeUser, error]);
	const setData = (keyData, value) => {
		//set data on key field
		setDataForm((prev) => ({
			...prev,
			data: {
				...dataForm.data,
				[keyData]: value,
			},
		}));
	};

	const sentForm = (data) => {
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
			error={error}
			message={message}
			dataForm={dataForm}
			setData={setData}
			sentForm={sentForm}
			navigation={navigation}
		/>
	);
};

export default Login;
