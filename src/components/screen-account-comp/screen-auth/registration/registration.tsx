import React, { FC, useEffect, useState } from "react";

import { validation } from "../../../../UTILS";
import RegistrationVisible from "./registration-visible";
import { useAuth } from "../../../../context/auth-context/useAuth";
import { TUser } from "../../../../context/type";

type TSetDataForm = {
	data: TUser;
	error: Array<string>;
};
const Registration: FC = ({ navigation }: any) => {
	const [dataForm, setDataForm] = useState<TSetDataForm>({
		data: {
			name: "",
			email: "",
			password: "",
			passwordRepeat: "",
		},
		error: [],
	} as TSetDataForm);
	const { activeUser, registration, error } = useAuth();
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
