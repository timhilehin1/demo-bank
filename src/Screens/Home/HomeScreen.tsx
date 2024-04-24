import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../../Pages/Home/HomePage";
import HistoryPage from "../../Pages/History/HistoryPage";
import ScanPage from "../../Pages/Scan/ScanPage";
import ProfilePage from "../../Pages/Profile/ProfilePage";
import { Entypo } from "@expo/vector-icons";
import {
	AntDesign,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function HomeScreen() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={({ route }) => ({
				tabBarLabelStyle: {
					display: "none",
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconComponent;
					if (route.name === "Home") {
						iconComponent = (
							<Entypo
								name='home'
								size={size}
								color={focused ? "#2C62EE" : "black"}
							/>
						);
					} else if (route.name === "History") {
						iconComponent = (
							<MaterialIcons
								name='history'
								size={size}
								color={focused ? "#2C62EE" : "black"}
							/>
						);
					} else if (route.name === "Scan") {
						iconComponent = (
							<MaterialCommunityIcons
								name='qrcode-scan'
								size={size}
								color={focused ? "#2C62EE" : "black"}
							/>
						);
					} else if (route.name === "Profile") {
						iconComponent = (
							<AntDesign
								name='user'
								size={size}
								color={focused ? "#2C62EE" : "black"}
							/>
						);
					}
					return iconComponent;
				},
			})}
		>
			<Tab.Screen
				options={{ headerShown: false }}
				name='Home'
				component={HomePage}
			/>
			<Tab.Screen
				name='History'
				options={{ title: "Transactions" }}
				component={HistoryPage}
			/>
			<Tab.Screen name='Scan' component={ScanPage} />
			<Tab.Screen name='Profile' component={ProfilePage} />
		</Tab.Navigator>
	);
}
