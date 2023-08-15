export const pickOne = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sleep = async delay => {
	return await new Promise(resolve => setTimeout(resolve, delay));
}