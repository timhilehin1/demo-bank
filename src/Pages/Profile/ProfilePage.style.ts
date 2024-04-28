import { StyleSheet } from "react-native";
import { defaultStyle } from "../../styles/variable";

export const profileStyles = StyleSheet.create({
	profileCard: {
		backgroundColor: defaultStyle.baseTextColor,
		height: 200,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	cameraContainer: {
		borderColor: defaultStyle.baseWhiteColor,
		borderWidth: 1,
		height: 100,
		width: 100,
		borderRadius: 100,
		position: "relative",
	},

	settingsContainer: {
		margin: 10,
		paddingHorizontal: 14,
		paddingTop: 8,
		backgroundColor: defaultStyle.baseWhiteColor,
		borderRadius: 16,
	},
});
