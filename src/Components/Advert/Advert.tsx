import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import styles from "./Advert.style";
const screenWidth = Dimensions.get("window").width;

function Advert({ text }: { text: string }) {
	const itemWidth = screenWidth * 0.9;
	return (
		<View style={[styles.advertWrapper, { width: itemWidth }]}>
			<Text style={{fontFamily: "InterRegular"}}>{text} </Text>
		</View>
	);
}

export default Advert;
