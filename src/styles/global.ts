import { StyleSheet, StatusBar } from "react-native";
import { defaultStyle } from "./variable";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: defaultStyle.baseColor,
		// color: "white",
		alignItems: "center",
	},

	text: {
		color: "white",
		marginTop: StatusBar.currentHeight,
	},
});
