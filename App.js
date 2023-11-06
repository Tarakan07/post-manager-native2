import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/auth-context/auth-provider";
import { PostProvider } from "./src/context/post-context/post-provider";
export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fff" }}>
			<AuthProvider>
				<PostProvider>
					<Navigation />
					<StatusBar
						animated={true}
						barStyle="dark-content"
						backgroundColor="#fff"
						translucent={false}
					/>
				</PostProvider>
			</AuthProvider>
		</GestureHandlerRootView>
	);
}
