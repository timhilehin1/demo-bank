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
import styles from "./HomePage.style";
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
import { getNairaFormat, maskMiddleNumbers } from "../../../utils";
import {
	useNavigation,
	ParamListBase,
	NavigationProp,
} from "@react-navigation/native";
import CustomText from "../../Components/Texts/CustomText";

SplashScreen.preventAutoHideAsync();

function HomePage() {
	const navigation: NavigationProp<ParamListBase> = useNavigation();
	const [fontsLoaded, fontError] = useFonts({
		InterBlack: require("../../../assets/fonts/Inter-Black.ttf"),
		InterBold: require("../../../assets/fonts/Inter-Bold.ttf"),
		InterRegular: require("../../../assets/fonts/Inter-Regular.ttf"),
		InterSemiBold: require("../../../assets/fonts/Inter-SemiBold.ttf"),
	});
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [balance, setBalance] = useState<boolean>(false);
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
			contentContainerStyle={[styles.container]}
			onLayout={onLayoutRootView}
		>
			<StatusBar
				animated={true}
				barStyle={"dark-content"}
				// showHideTransition={statusBarTransition}
			/>
			{/* introduction */}
			<HomeHeader />

			<View style={[styles.balance_card]}>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 8,
						justifyContent: "center",
						marginTop: 16,
					}}
				>
					<Text
						style={{
							color: "#ffffff",
							fontFamily: "InterRegular",
							fontSize: 14,
						}}
					>
						Account Balance
					</Text>
					<Image source={require("../../../assets/images/naijaFlag.png")} />
				</View>
				<View
					style={{
						height: 1,
						backgroundColor: defaultStyle.baseBorderColor,
						alignSelf: "stretch",
						position: "absolute",
						top: 50,
						bottom: 0,
						right: 12,
						left: 12,
					}}
				/>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 8,
						justifyContent: "center",
						alignItems: "center",
						marginTop: 20,
					}}
				>
					{balance ? (
						<Text
							style={{
								color: "#ffffff",
								fontFamily: "InterRegular",
								fontSize: 20,
								fontWeight: "900",
							}}
						>
							{getNairaFormat("500000")}
						</Text>
					) : (
						<Text
							style={{
								color: "#ffffff",
								fontFamily: "InterRegular",
								fontSize: 20,
								fontWeight: "900",
							}}
						>
							****
						</Text>
					)}

					{balance ? (
						<FontAwesome
							onPress={() => {
								setBalance(!balance);
							}}
							name='eye-slash'
							size={20}
							color='#ffffff'
						/>
					) : (
						<FontAwesome
							onPress={() => {
								setBalance(!balance);
							}}
							name='eye'
							size={20}
							color='#ffffff'
						/>
					)}
				</View>
				<Image
					style={{ position: "absolute", bottom: 20, right: 20 }}
					source={require("../../../assets/images/mastercardLogo.png")}
				/>
				<Text
					style={{
						color: "#ffffff",
						fontFamily: "InterRegular",
						fontSize: 16,
						fontWeight: "900",
						position: "absolute",
						bottom: 20,
						left: 20,
					}}
				>
					{maskMiddleNumbers(1111222233334444)}
				</Text>
			</View>

			{/* <Image source={require("../../../assets/images/accountCard.png")} /> */}
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
						<Feather name='menu' size={25} color='black' />
					</View>

					<Text style={{ fontFamily: "InterRegular" }}>More</Text>
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
					onPress={() => navigation.navigate("History")}
				>
					View all
				</Text>
			</View>

			<History type='flatlist' />
			{/* advert */}
			{/* <FlatList
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
			</View> */}
		</ScrollView>
	);
}

export default HomePage;
