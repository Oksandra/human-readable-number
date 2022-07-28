module.exports = function toReadable (number) {
    let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens =['','', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let numberByString = number.toString()
    let result  
    if(number === 0) {
          return 'zero'
        }
    if(number > 0 && number < 20) { 
     return result = numbers[number];
    }
   if(number > 19 && number < 100) { 
    result = dozens[numberByString[0]] + ' ' + numbers[number % 10] ;
      return result.trim()
    }
  if(number > 99 && number < 1000) {
   result = numbers[numberByString[0]] + ' ' + 'hundred' + ' '
   let trimmedNumber = numberByString.substring(1)
   let stringNumberToCompare = +trimmedNumber
     if (stringNumberToCompare > 0 && stringNumberToCompare < 20) {
       result += numbers[stringNumberToCompare]}
    if (stringNumberToCompare > 19 && stringNumberToCompare < 100) {
       result += dozens[trimmedNumber[0]] + ' ' + numbers[number % 10] ;}
     return result.trim()
  }
    
 
}

