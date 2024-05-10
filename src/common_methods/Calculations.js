const generateRandomNumber = (minimumValue, maximumValue) => {
    const minValue = Math.ceil(minimumValue);
    const maxValue = Math.floor(maximumValue);

    let randomNumber;
    
    do {
        randomNumber = Math.round(Math.random() * (maxValue - minValue) + minValue);
    } while (randomNumber < minValue || randomNumber > maxValue);

    return randomNumber;
}

module.exports = {
    generateRandomNumber: generateRandomNumber
}