import React from "react";
import { View } from "react-native";
import { History } from "../../Components/History/History";
import styles from "../Home/HomePage.style";
function HistoryPage() {
	return (
		<View style={styles.container}>
			<History type='scrolllist' />
		</View>
	);
}

export default HistoryPage;
