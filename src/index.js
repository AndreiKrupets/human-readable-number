module.exports = function toReadable (number) {
const numbers = {
0 : 'zero',    
1 : 'one',
2 : 'two',
3 : 'three',
4 : 'four',
5 : 'five',
6 : 'six',
7 : 'seven',
8 : 'eight',
9 : 'nine',
10 : 'ten',
11 : 'eleven',
12 : 'twelve',
13 : 'thirteen',
14 : 'fourteen',
15 : 'fifteen',
16 : 'sixteen',
17 : 'seventeen',
18 : 'eighteen',
19 : 'nineteen',
20 : 'twenty',
30 : 'thirty',
40 : 'forty',
50 : 'fifty',
60 : 'sixty',
70 : 'seventy',
80 : 'eighty',
90 : 'ninety'
};

let result = '';
const hundred = Math.floor(number / 100);
const underHundred = number % 100;
const ten = Math.floor(number % 100) - number % 10;
const unit = number % 10;
if (number === 0) {
    return 'zero';
}
if (number % 100 === 0) {
    console.log('wewewewe')
    return `${numbers[hundred]} hundred`;
}
if ( hundred > 0) {
    result += `${numbers[hundred]} hundred `;
    console.log('one');
    console.log(ten);
    
}
if (underHundred <=20) {
    result += `${numbers[underHundred]} `;
    console.log('two');
    
}
if (underHundred > 21 && underHundred % 10 === 0) {
    result += `${numbers[ten]}`;
    console.log('three');
    return result;
}

if (underHundred >= 21 && underHundred % 10 !==0) {
    result += `${numbers[ten]} ${numbers[unit]}`;
    console.log('four');
}
return result.trim();
}
