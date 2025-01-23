const delay = seconds => {
	return new Promise(
		resolve => setTimeout(resolve, seconds * 1000)
)};

const countToFive = async() => {
	console.log("one");
	await delay(1);
	console.log("Two");
	await delay(1);
	console.log("three");
	await delay(1);
};

countToFive();