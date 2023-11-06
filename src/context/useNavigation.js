import { useContext } from "react";
import { NavigationContext } from "./navigation-context";
export const useNavigation = () => {
	const navigation = useContext(NavigationContext);
	return navigation;
};
