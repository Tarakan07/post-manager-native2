import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../../../components/header";
import Login from "../../../../components/screen-account-comp/screen-auth/login";
import { TScreenProps } from "../../../type";
type RootStackParamList = {
	Login: undefined;
};
const LoginScreen: FC<TScreenProps<RootStackParamList, "Login">> = ({
	navigation,
}) => {
	return (
		<View style={styles.container}>
			<Header title={"Login"} navigation={navigation} />
			<Login navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default LoginScreen;
