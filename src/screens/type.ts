import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

export type TScreenProps<
	T extends ParamListBase,
	U extends string
> = NativeStackScreenProps<T, U>;
