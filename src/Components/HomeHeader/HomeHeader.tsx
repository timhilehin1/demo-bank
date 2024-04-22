import React from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import styles from "./HomeHeader.style";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function HomeHeader() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.avatar_Wrapper}>
				<Image
					source={require("../../../assets/images/avatar.jpg")}
					style={{
						width: 40,
						height: 40,
						objectFit: "cover",
						borderRadius: 50,
					}}
				/>
				<View>
					<Text style={{ fontFamily: "InterRegular" }}>Hello,</Text>
					<Text style={{ fontWeight: "600", fontFamily: "InterSemiBold" }}>
						Timilehin
					</Text>
				</View>
			</View>
			<View style={styles.icon_Wrapper}>
				<Ionicons name='notifications-outline' size={24} color='black' />
				<Entypo
					style={styles.icon_notifier}
					name='dot-single'
					size={26}
					color='red'
				/>
			</View>
		</SafeAreaView>
	);
}

export default HomeHeader;
