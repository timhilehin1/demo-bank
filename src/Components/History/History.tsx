import React, { useMemo } from "react";
import { Text, View, Pressable, Image, FlatList } from "react-native";
import { HistoryData, getNairaFormat } from "../../../utils";
import { styles } from "./History.style";

export const TransactionWrapper = ({
	name,
	type,
	transaction_date,
	amount,
}: {
	name: string;
	type: string;
	transaction_date?: string;
	amount: number;
}) => {
	return (
		<View style={styles.transactionWrapper}>
			<View style={styles.leftHandSide}>
				<Image
					style={{
						width: 40,
						height: 40,
						objectFit: "cover",
						backgroundColor: "#f2f2f7",
						borderRadius: 50,
					}}
					source={require("../../../assets/images/uba.png")}
				/>
				<View>
					<Text>{name}</Text>
					<Text style={{ marginTop: 8, fontSize: 12, color: "#a8a8a8" }}>
						{transaction_date}
					</Text>
				</View>
			</View>
			<Text
				style={[type === "cr" ? { color: "#169B62" } : { color: "#EB001B" }]}
			>
				{getNairaFormat(amount?.toString())}
			</Text>
		</View>
	);
};

export const History = () => {
	return useMemo(
		() => (
			<View style={styles.container}>
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
								transaction_date={item.transaction_date}
								amount={item.amount}
							/>
						</Pressable>
					)}
				/>
			</View>
		),
		[HistoryData]
	);
};
