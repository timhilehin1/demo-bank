import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./src/Screens/Home/Home";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Home />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		color: "white",
		alignItems: "center",
	},

	text: {
		color: "white",
		marginTop: StatusBar.currentHeight || 50,
	},
});
