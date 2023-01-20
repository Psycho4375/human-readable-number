module.exports = function toReadable (number) {
    let toTwelve = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let toTens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let toHundreds = ["one hundred", "two hundred", "three hundred","four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    
    let nTotwelve;
    let hundredResult;
    let ones;
    let tens;
    let twoN;
    if (number == 0){
        console.log("zero");
    } else
    if (number < 20){
        nTotwelve = toTwelve[number-1];
        return(nTotwelve);
    } else if (number < 100){
        if (number % 10 > 0){


        tens = toTens[Math.trunc((number / 10)-2)];
        ones = toTwelve[number % 10 - 1];
        twoN = tens + ' ' + ones;
        return(twoN);
        }else{
        tens = toTens[Math.trunc((number / 10)-2)];
        twoN = tens;
        return(twoN);    
        } 
    } 
    
    if (number >= 100){
        if(number % 100 == 0){
    switch(Math.trunc(number / 100)){
        case 0:
            break;
        case 1:
            hundredResult = toHundreds[0];
            break;
        case 2:
            hundredResult = toHundreds[1];
            break;
        case 3:
            hundredResult = toHundreds[2];
            break;
        case 4:
            hundredResult = toHundreds[3];
            break;
        case 5:
            hundredResult = toHundreds[4];
            break;
        case 6:
            hundredResult = toHundreds[5];
            break;
        case 7:
            hundredResult = toHundreds[6];
            break;
        case 8:
            hundredResult = toHundreds[7];
            break;
        case 9:
            hundredResult = toHundreds[8];
            break;
    }
    return(hundredResult);
    }else{
        switch(Math.trunc(number / 100)){
        case 0:
            break;
        case 1:
            hundredResult = toHundreds[0];
            break;
        case 2:
            hundredResult = toHundreds[1];
            break;
        case 3:
            hundredResult = toHundreds[2];
            break;
        case 4:
            hundredResult = toHundreds[3];
            break;
        case 5:
            hundredResult = toHundreds[4];
            break;
        case 6:
            hundredResult = toHundreds[5];
            break;
        case 7:
            hundredResult = toHundreds[6];
            break;
        case 8:
            hundredResult = toHundreds[7];
            break;
        case 9:
            hundredResult = toHundreds[8];
            break;
        }

        tens = toTens[Math.trunc((number % 100) / 10 - 2)];
        ones = toTwelve[number % 10 - 1];
        if (ones != undefined){
        twoN = tens + ' ' + ones;
        return(hundredResult + ' ' + twoN);
        }else if (tens = 0){
        twoN = ones;
        return(hundredResult + ' ' + twoN);
        }else{
        twoN = tens;
        return(hundredResult + ' ' + twoN);
        }

    }
}
}
