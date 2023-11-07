import { TUser } from "../../../context/type";

export type TSetDataForm = {
	data: TUser;
	error: Array<string>;
};

export type TPAuthVisible = {
	message: string | null;
	sentForm: (data: TUser) => void;
	setData: (keyData: string, value: string) => void;
	dataForm: TSetDataForm;
};
