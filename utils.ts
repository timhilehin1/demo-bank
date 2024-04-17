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
		transaction_date: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 70000,
	},
	{
		id: 2,
		name: "Oladapo Timilehin",
		transaction_date: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 3,
		name: "Gbadebo Johnson",
		transaction_date: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
        amount: 60000,
	},
	{
		id: 4,
		name: "Olu T",
		transaction_date: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 5,
		name: "Babalola Temiloluwa",
		transaction_date: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 6,
		name: "Babalola Temiloluwa",
		transaction_date: "2.55am",
		type: "cr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 7,
		name: "Babalola Temiloluwa",
		transaction_date: "2.55am",
		type: "dr",
		recipient_sender: "GTB",
		amount: 50000,
	},
	{
		id: 8,
		name: "Babalola Temiloluwa",
		transaction_date: "2.55am",
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

export const getNairaFormat = (amount : any) => {
	if (amount) {
		amount = amount.replaceAll("₦", "");
		amount = amount.replaceAll(",", "");
		return NairaFormat.format(amount);
	}
	return NairaFormat.format(0);
};
