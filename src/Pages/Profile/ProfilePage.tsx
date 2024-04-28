import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, Switch } from "react-native";
import styles from "../Home/HomePage.style";
import { profileStyles } from "./ProfilePage.style";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "moti";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

function ProfilePage() {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<SafeAreaView>
			<View style={profileStyles.profileCard}>
				<Pressable
					style={({ pressed }) => [
						pressed
							? [profileStyles.cameraContainer, { borderColor: "grey" }]
							: profileStyles.cameraContainer,
					]}
				>
					<AntDesign
						name='camerao'
						size={40}
						color='white'
						style={{ position: "absolute", top: 28, left: 30 }}
					/>
				</Pressable>

				<Text
					style={{
						fontFamily: "InterSemiBold",
						textAlign: "center",
						color: "#ffffff",
						marginVertical: 16,
					}}
				>
					TIMILEHIN OLADAPO
				</Text>
				<Text
					style={{
						fontFamily: "InterSemiBold",
						textAlign: "center",
						color: "#ffffff",
					}}
				>
					Show Details
				</Text>
			</View>
			<ScrollView style={profileStyles.settingsContainer}>
				<Text style={{ fontFamily: "InterRegular" }}>Privacy and Security</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 16,
						marginTop: 12,
					}}
				>
					<Ionicons name='finger-print-outline' size={30} color='black' />
					<Text style={{ fontFamily: "InterRegular" }}>Biometric Login</Text>
					<Switch
						style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
						trackColor={{ false: "#767577", true: "#f2f2f7" }}
						thumbColor={isEnabled ? "black" : "#f4f3f4"}
						ios_backgroundColor='#3e3e3e'
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
				<View
					style={{
						borderColor: "#f5f5f9",
						borderBottomWidth: 2,
					}}
				/>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 16,
						marginTop: 12,
					}}
				>
					<MaterialIcons name='hide-source' size={30} color='black' />
					<Text style={{ fontFamily: "InterRegular" }}>
						Hide Account Balance
					</Text>
					<Switch
						style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
						trackColor={{ false: "#767577", true: "#f2f2f7" }}
						thumbColor={isEnabled ? "black" : "#f4f3f4"}
						ios_backgroundColor='#3e3e3e'
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
				<View
					style={{
						borderColor: "#f5f5f9",
						borderBottomWidth: 2,
					}}
				/>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 16,
						marginTop: 12,
					}}
				>
					<MaterialIcons name='dark-mode' size={30} color='black' />
					<Text style={{ fontFamily: "InterRegular" }}>Dark Mode</Text>
					<Switch
						style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
						trackColor={{ false: "#767577", true: "#f2f2f7" }}
						thumbColor={isEnabled ? "black" : "#f4f3f4"}
						ios_backgroundColor='#3e3e3e'
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
				<View
					style={{
						borderColor: "#f5f5f9",
						borderBottomWidth: 2,
					}}
				/>
				<Pressable
					style={({ pressed }) => [
						pressed ? { backgroundColor: "#f2f2f7" } : {},
					]}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							padding: 16,
							marginTop: 12,
						}}
					>
						<Feather name='map-pin' size={30} color='black' />
						<Text style={{ fontFamily: "InterRegular" }}>
							Find Nearest Branch / POS Terminal
						</Text>
					</View>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	);
}

export default ProfilePage;
