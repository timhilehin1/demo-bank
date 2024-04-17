import React, { useState, useCallback } from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	ScrollView,
	FlatList,
	NativeSyntheticEvent,
	NativeScrollEvent,
	Dimensions,
	Pressable,
	StatusBar,
} from "react-native";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Advert from "../../Components/Advert/Advert";
import styles from "./Home.style";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { advertData } from "../../../utils";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { History } from "../../Components/History/History";
import { defaultStyle } from "../../styles/variable";

SplashScreen.preventAutoHideAsync();

function Home() {
	const [fontsLoaded, fontError] = useFonts({
		InterBlack: require("../../../assets/fonts/Inter-Black.ttf"),
		InterBold: require("../../../assets/fonts/Inter-Bold.ttf"),
		InterRegular: require("../../../assets/fonts/Inter-Regular.ttf"),
		InterSemiBold: require("../../../assets/fonts/Inter-SemiBold.ttf"),
	});
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const screenWidth = Math.round(Dimensions.get("window").width);
	const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const totalWidth = event.nativeEvent.layoutMeasurement.width;
		const xPos = event.nativeEvent.contentOffset.x;
		const current = Math.floor(xPos / totalWidth);
		setCurrentIndex(current);
	};

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
			onLayout={onLayoutRootView}
		>
			<StatusBar
				animated={true}
				barStyle={"dark-content"}
				// showHideTransition={statusBarTransition}
			/>
			{/* introduction */}
			<HomeHeader />
			{/* <View style={styles.balance_card}></View> */}
			{/* balance */}
			<Image source={require("../../../assets/images/accountCard.png")} />
			<View style={styles.sections_Wrapper}>
				<View style={styles.section}>
					<View style={styles.icon_Wrapper}>
						<Entypo name='plus' size={30} color='black' />
					</View>
					<Text style={{ fontFamily: "InterRegular" }}>Add</Text>
				</View>

				<View style={styles.section}>
					<View style={styles.icon_Wrapper}>
						<Feather name='arrow-up-right' size={30} color='black' />
					</View>
					<Text style={{ fontFamily: "InterRegular" }}>Transfer</Text>
				</View>

				<View style={styles.section}>
					<View style={styles.icon_Wrapper}>
						<Ionicons name='swap-horizontal' size={30} color='black' />
					</View>
					<Text style={{ fontFamily: "InterRegular" }}>Swap</Text>
				</View>

				<View style={styles.section}>
					<View style={styles.icon_Wrapper}>
						<FontAwesome name='qrcode' size={30} color='black' />
					</View>

					<Text style={{ fontFamily: "InterRegular" }}>Scan</Text>
				</View>

				{/* <View style={styles.section}>
					<View style={styles.icon_Wrapper}>
						<MaterialCommunityIcons
							name='qrcode-plus'
							size={30}
							color='black'
						/>
					</View>
					<Text>More</Text>
				</View> */}
			</View>

			{/* advert */}
			<FlatList
				style={[{ width: screenWidth * 0.95, overflow: "hidden", flexGrow: 0 }]}
				data={advertData}
				renderItem={({ item }) => <Advert text={item.text} />}
				horizontal
				pagingEnabled
				onScroll={onScroll}
				showsHorizontalScrollIndicator={false}
			/>

			<View style={[styles.paginationWrapper]}>
				{advertData.map((item, index) => (
					<View
						key={index}
						style={[
							styles.paginationDot,
							currentIndex === index ? styles.activePaginationDot : {},
						]}
					></View>
				))}
			</View>

			{/* transaction history */}
			<View style={styles.historyHeader}>
				<Text style={{ fontFamily: "InterBold", fontSize: 20 }}>
					Recent Transactions
				</Text>
				<Text
					style={{
						fontFamily: "InterRegular",
						fontSize: 16,
						textDecorationLine: "underline",
						color: "#2C62EE",
					}}
				>
					View all
				</Text>
			</View>

			<History />
		</ScrollView>
	);
}

export default Home;
