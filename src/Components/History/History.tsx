import React, { useMemo } from "react";
import {
	Text,
	View,
	Pressable,
	Image,
	FlatList,
	SectionList,
} from "react-native";
import { HistoryData, getNairaFormat, historyList } from "../../../utils";
import { styles } from "./History.style";


export const TransactionWrapper = ({
	name,
	type,
	transaction_time,
	amount,
}: {
	name: string;
	type: string;
	transaction_time?: string;
	amount: number;
}) => {
	return (
		<View style={[styles.transactionWrapper]}>
			<View style={styles.leftHandSide}>
				<Image
					style={{
						width: 40,
						height: 40,
						objectFit: "contain",
						backgroundColor: "#f2f2f7",
						borderRadius: 50,
					}}
					source={require("../../../assets/images/uba.png")}
				/>
				<View>
					<Text style={{ fontFamily: "InterRegular" }}>{name}</Text>
					<Text
						style={{
							marginTop: 8,
							fontSize: 12,
							color: "#a8a8a8",
							fontFamily: "InterRegular",
						}}
					>
						{transaction_time}
					</Text>
				</View>
			</View>
			<Text
				style={[
					type === "cr"
						? { color: "#169B62", fontFamily: "InterRegular" }
						: { color: "#EB001B", fontFamily: "InterRegular" },
				]}
			>
				{getNairaFormat(amount?.toString())}
			</Text>
		</View>
	);
};

export const History = ({ type }: { type: string }) => {
	return useMemo(
		() => (
			<View style={type === "flatlist" ? styles.container : null}>
				{type === "flatlist" ? (
					<FlatList
						scrollEnabled={false}
						nestedScrollEnabled={true}
						data={HistoryData.splice(0, 3)}
						ItemSeparatorComponent={() => (
							<View
								style={{
									borderColor: "#f5f5f9",
									borderBottomWidth: 1,
									marginHorizontal: 16,
								}}
							/>
						)}
						renderItem={({ item }) => (
							<Pressable
								style={({ pressed }) => [
									pressed ? { backgroundColor: "#f2f2f7" } : {},
								]}
							>
								<TransactionWrapper
									name={item.name}
									type={item.type}
									transaction_time={item.transaction_time}
									amount={item.amount}
								/>
							</Pressable>
						)}
					/>
				) : (
					<SectionList
						showsVerticalScrollIndicator={false}
						scrollEnabled={true}
						nestedScrollEnabled={true}
						sections={historyList}
						ItemSeparatorComponent={() => (
							<View
								style={{
									borderColor: "#f5f5f9",
									borderBottomWidth: 1,
									marginHorizontal: 16,
								}}
							/>
						)}
						renderItem={({ item }) => (
							<View style={{ backgroundColor: "#ffffff", borderRadius: 8 }}>
								<Pressable
									style={({ pressed }) => [
										pressed ? { backgroundColor: "#f2f2f7" } : {},
									]}
								>
									<TransactionWrapper
										name={item.name}
										type={item.type}
										transaction_time={item.transaction_time}
										amount={item.amount}
									/>
								</Pressable>
							</View>
						)}
						renderSectionHeader={({ section: { transaction_date } }) => (
							<Text style={{ fontFamily: "InterSemiBold", marginVertical: 12 }}>
								{transaction_date}
							</Text>
						)}
					/>
				)}
			</View>
		),
		[HistoryData, historyList]
	);
};
