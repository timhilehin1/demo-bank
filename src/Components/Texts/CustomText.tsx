import React from "react";
import { Text } from 'react-native';
import type { StyleProp, TextStyle } from "react-native";

interface TextProps {
	children: React.ReactNode;
}

function CustomText({ children, fontFamily, color, fontWeight, }: any) {
	return <Text style={{ fontFamily, color, fontWeight,}}>{children}</Text>;
}

export default CustomText;
