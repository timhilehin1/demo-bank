export const Sections = [
	{
		id: 1,
		name: "Add",
		icon: "",
	},
	{
		id: 2,
		name: "Transfer",
		icon: "",
	},
	{
		id: 3,
		name: "Swap",
		icon: "",
	},
	{
		id: 4,
		name: "Scan",
		icon: "",
	},
	{
		id: 5,
		name: "More",
		icon: "",
	},
];

export const advertData = [
	{
		id: 1,
		text: "Save for rainy days ooo!, Make rain no beat you when e start",
	},
	{
		id: 2,
		text: "If you fail to plan, you plan to fail",
	},
];

export const HistoryData = [
	{
		id: 1,
		name: "Babalola Temiloluwa",
		transaction_time: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 70000,
	},
	{
		id: 2,
		name: "Oladapo Timilehin",
		transaction_time: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 3,
		name: "Gbadebo Johnson",
		transaction_time: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
		amount: 60000,
	},
	{
		id: 4,
		name: "Olu T",
		transaction_time: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 5,
		name: "Babalola Temiloluwa",
		transaction_time: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 6,
		name: "Babalola Temiloluwa",
		transaction_time: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 7,
		name: "Babalola Temiloluwa",
		transaction_time: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 8,
		name: "Babalola Temiloluwa",
		transaction_time: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
		amount: 50000,
	},
];

export const NairaFormat = new Intl.NumberFormat("en-NG", {
	maximumFractionDigits: 0,
	currency: "NGN",
	style: "currency",
});

export const getNairaFormat = (amount: any) => {
	if (amount) {
		amount = amount.replaceAll("₦", "");
		amount = amount.replaceAll(",", "");
		return NairaFormat.format(amount);
	}
	return NairaFormat.format(0);
};

export const historyList = [
	{
		transaction_date: "27th October, 2023",
		data: [
			{
				id: 1,
				name: "Babalola Temiloluwa",
				transaction_time: "2.55am",
				type: "cr",
				recipient_sender: "GTB",
				amount: 70000,
			},
			{
				id: 2,
				name: "Oladapo Timilehin",
				transaction_time: "2.55am",
				type: "cr",
				recipient_sender: "GTB",
				amount: 50000,
			},
			{
				id: 3,
				name: "Gbadebo Johnson",
				transaction_time: "2.55am",
				type: "dr",
				recipient_sender: "GTB",
				amount: 60000,
			},
			{
				id: 4,
				name: "Bob Williams",
				transaction_time: "9:15 AM",
				type: "cr",
				recipient_sender: "Bank D",
				amount: 1200,
			},
		],
	},
	{
		transaction_date: "26th October, 2023",
		data: [
			{
				id: 4,
				name: "Bob Williams",
				transaction_time: "9:15 AM",
				type: "cr",
				recipient_sender: "Bank D",
				amount: 1200,
			},
			{
				id: 5,
				name: "Emily Brown",
				transaction_time: "11:50 AM",
				type: "dr",
				recipient_sender: "Bank E",
				amount: 2800,
			},
			{
				id: 6,
				name: "Michael Taylor",
				transaction_time: "3:30 PM",
				type: "cr",
				recipient_sender: "Bank F",
				amount: 5000,
			},
		],
	},
	{
		transaction_date: "25th October, 2023",
		data: [
			{
				id: 7,
				name: "David Clark",
				transaction_time: "8:00 AM",
				type: "dr",
				recipient_sender: "Bank G",
				amount: 1500,
			},
			{
				id: 8,
				name: "Sarah Martinez",
				transaction_time: "12:20 PM",
				type: "cr",
				recipient_sender: "Bank H",
				amount: 2000,
			},
			{
				id: 9,
				name: "Daniel Anderson",
				transaction_time: "5:10 PM",
				type: "dr",
				recipient_sender: "Bank I",
				amount: 3000,
			},
		],
	},
	// Add more data for other days as needed
];

export function maskMiddleNumbers(number: number) {
	const numberString = number.toString();
	if (numberString.length <= 8) {
		return numberString.replace(/\d{4}/g, "$& ");
	} else {
		const middleNumbers = numberString.slice(
			Math.floor((numberString.length - 8) / 2),
			-Math.ceil((numberString.length - 8) / 2)
		);
		const maskedMiddle = middleNumbers.replace(/\d/g, "*");
		return numberString
			.replace(middleNumbers, maskedMiddle)
			.replace(/\d{4}/g, "$& ");
	}
}
