module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.one.org/international/",
		"https://www.one.org/us/",
		"https://act.one.org/sign/debt-relief-2020-can-fr"
	]
};