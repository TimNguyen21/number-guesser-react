const generateRandomNumber = (minimumValue, maximumValue) => {
    const minValue = Math.ceil(minimumValue);
    const maxValue = Math.floor(maximumValue);
    const randomNumber = Math.round(Math.random() * (maxValue - minValue + 1) + minValue);

    return randomNumber;
}

module.exports = {
    generateRandomNumber: generateRandomNumber
}