import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Screens//
import PostsScreen from "../screens/PostsScreen";
import PostCardScreen from "../screens/PostsScreen/PostCardScreen";
import AccountScreen from "../screens/AccountScreen";
import LoginScreen from "../screens/AccountScreen/AuthorizationScreen/LoginScreen";
import RegistrationScreen from "../screens/AccountScreen/AuthorizationScreen/RegistrationScreen";
import ProfileScreen from "../screens/AccountScreen/ProfileScreen";
import CreatePostScreen from "../screens/PostsScreen/CreatePostScreen";
//End Screens//
const BottomTab = createBottomTabNavigator();
const NativeNavigator = createNativeStackNavigator();
const Navigation = () => {
	return (
		<NavigationContainer
			theme={{
				colors: { background: "transparent" },
			}}
		>
			<BottomTab.Navigator
				screenOptions={({ route }) => BottomNavigatorConfig(route)}
			>
				<BottomTab.Screen name="NavigatorPosts" component={NavigatorPosts} />

				<BottomTab.Screen
					name="NavigatorAccount"
					component={NavigatorAccount}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

const NavigatorPosts = () => {
	return (
		<NativeNavigator.Navigator
			screenOptions={{
				header: ({ navigation, route, options, back }) => null,
				animation: "slide_from_left",
			}}
		>
			<NativeNavigator.Screen name="Posts" component={PostsScreen} />
			<NativeNavigator.Screen name="PostItem" component={PostCardScreen} />
			<NativeNavigator.Screen name="CreatePost" component={CreatePostScreen} />
		</NativeNavigator.Navigator>
	);
};
const NavigatorAccount = () => {
	return (
		<NativeNavigator.Navigator
			screenOptions={{
				header: ({ navigation, route, options, back }) => null,
				animation: "slide_from_left",
			}}
		>
			<NativeNavigator.Screen name="Account" component={AccountScreen} />
			<NativeNavigator.Screen name="Login" component={LoginScreen} />
			<NativeNavigator.Screen
				name="Registration"
				component={RegistrationScreen}
			/>
			<NativeNavigator.Screen name="Profile" component={ProfileScreen} />
		</NativeNavigator.Navigator>
	);
};

////////////Settings///////////////////////
const createIcon = (Comp, name, size, color, notif = false) => {
	return (
		<View>
			<Comp name={name} size={size} color={color} />
			{notif && (
				<View
					style={{
						width: 5,
						height: 5,
						borderRadius: 50,
						backgroundColor: "#E14E66",
						position: "absolute",
						right: -5,
					}}
				/>
			)}
		</View>
	);
};

const BottomNavigatorConfig = (route) => {
	return {
		headerShown: false,
		tabBarStyle: {
			backgroundColor: "#fff",
			position: "absolute",
			// borderTopWidth: 0,
			elevation: 0,
		},
		tabBarShowLabel: false,
		tabBarIcon: ({ focused, color, size }) => {
			if (route.name === "NavigatorPosts") {
				return focused
					? createIcon(MaterialCommunityIcons, "post-outline", 22, "#51D3B7")
					: createIcon(MaterialCommunityIcons, "post-outline", 22, "#A8A8A8");
			}
			if (route.name === "NavigatorAccount") {
				return focused
					? createIcon(
							MaterialCommunityIcons,
							"account-circle-outline",
							22,
							"#51D3B7"
					  )
					: createIcon(
							MaterialCommunityIcons,
							"account-circle-outline",
							22,
							"#A8A8A8"
					  );
			}
		},
	};
};

export default Navigation;
