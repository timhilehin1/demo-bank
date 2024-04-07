import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	ScrollView,
} from "react-native";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import styles from "./Home.style";

function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<HomeHeader />
			<Image source={require("../../../assets/images/accountCard.png")} />
		</SafeAreaView>
	);
}

export default Home;
