module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 20) {
        return `${ones[number]}`
    }
    if (number < 100) {
        return `${tens[~~((number / 10) - 2)]}${(number % 10 ? ` ${ones[~~(number % 10)]}` : '')}`
    }
    if (number < 1000) {
        return `${ones[~~(number / 100)]} hundred${(number % 100 === 0 ? '' : ` ${toReadable(number % 100)}`)}`
    }
}
