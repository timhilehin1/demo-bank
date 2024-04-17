import { StyleSheet } from "react-native";
import { defaultStyle } from "../../styles/variable";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyle.baseWhiteColor,
		borderRadius: 16,
		fontFamily: "InterRegular",
		marginTop: 18,
	},

	transactionWrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
	},

	leftHandSide: {
		display: "flex",
		gap: 16,
		alignItems: "center",
		flexDirection: "row",
	},
});
