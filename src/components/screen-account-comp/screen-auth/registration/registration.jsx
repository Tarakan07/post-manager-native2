import React, { useEffect, useState } from "react";

import { validation } from "../../../../UTILS";
import RegistrationVisible from "./registration-visible";
import { useAuth } from "../../../../context/auth-context/useAuth";

const Registration = ({ navigation }) => {
	const [dataForm, setDataForm] = useState({
		data: {
			name: "",
			email: "",
			password: "",
			passwordRepeat: "",
		},
		error: [],
	});
	const { activeUser, registration, error } = useAuth();
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
		const changeState = () => {
			//if have errors - change state
			setDataForm((prev) => ({
				...prev,
				error: validation(data).errors,
			}));
		};

		if (validation(data).hasErrors) {
			changeState();
			return;
		}

		changeState();
		registration(dataForm.data);
	};
	return (
		<RegistrationVisible
			message={message}
			sentForm={sentForm}
			setData={setData}
			dataForm={dataForm}
			error={error}
		/>
	);
};

export default Registration;
