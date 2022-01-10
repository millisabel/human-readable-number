module.exports = function toReadable(number) {
    let units  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens  = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number < 20){
        return units[number];
    }
    if (number >= 20 && number < 100) {
        return `${tens[Math.floor(number/10)]} ${number%10 ? units[number%10] : ''}`.trim();
    }
    return `${units[Math.floor(number/100)]} hundred ${number%100 === 0 ? '' : toReadable(number%100)}`.trim();
}

