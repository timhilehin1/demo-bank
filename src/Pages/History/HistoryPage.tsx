import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, SafeAreaView } from "react-native";
import { History } from "../../Components/History/History";
import styles from "../Home/HomePage.style";
import { MotiView } from "moti";
function HistoryPage() {
	const [isToggled, setIsToggled] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			setIsToggled(true);
		}, 2000);
	}, []);

	if (isLoading) {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: "#f2f2f7",
					alignItems: "center",
					justifyContent: "center",
					padding: 20,
				}}
			>
				<ActivityIndicator size={"large"} color='black' />
			</SafeAreaView>
		);
	}
	return (
		<View style={styles.container}>
			<MotiView
				animate={{
					opacity: isToggled ? 1 : 0,
					scale: isToggled ? 1 : 1.5,
				}}
				transition={{ type: "timing", delay: 0 }}
				style={{
					width: "100%",
					padding: 10,
				}}
			>
			<History type='scrolllist' />
			</MotiView>
		</View>
	);
}

export default HistoryPage;
