import React from "react";
import { SafeAreaView } from "react-native";
import Home from "./src/Screens/Home/Home";
import { globalStyles } from "./src/styles/global";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<SafeAreaView style={globalStyles.container}>
			<Home />
		</SafeAreaView>
	);
}
