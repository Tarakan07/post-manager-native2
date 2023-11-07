import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../../../components/header";
import Registration from "../../../../components/screen-account-comp/screen-auth/registration";
import { TScreenProps } from "../../../type";
type RootStackParamList = {
	Registration: undefined;
};
const RegistrationScreen: FC<
	TScreenProps<RootStackParamList, "Registration">
> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title={"Registration"} navigation={navigation} />
			<Registration navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, alignContent: "center" },
});
export default RegistrationScreen;
