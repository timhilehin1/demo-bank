import { StyleSheet } from "react-native";
import { defaultStyle } from "../../styles/variable";

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
		borderColor: "none",
		marginBottom: 10,
		backgroundColor: defaultStyle.baseColor,
		paddingHorizontal:14

	},

	sections_Wrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 16,
	},

	balance_card: {
		backgroundColor: defaultStyle.baseTextColor,
		borderRadius: 10,
		height: 200,
		color: defaultStyle.baseWhiteColor,
		position: "relative",
	},

	section: {
		flexDirection: "column",
		gap: 6,
		justifyContent: "center",
		alignItems: "center",
	},

	icon_Wrapper: {
		borderColor: defaultStyle.baseBorderColor,
		color: "#000000",
		borderRadius: 50,
		padding: 12,
		borderWidth: 1,
		position: "relative",
	},

	paginationWrapper: {
		gap: 16,
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 12,
	},

	paginationDot: {
		borderRadius: 8,
		width: 8,
		height: 8,
		backgroundColor: defaultStyle.baseBorderColor,
	},

	activePaginationDot: {
		backgroundColor: "#dee4f7",
	},

	historyHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 24,
	},
});

export default styles;
