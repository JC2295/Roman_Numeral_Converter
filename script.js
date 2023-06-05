function convertToRoman(num) {

  let arabicArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  let romanArray = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

  let romanNumber = [];

  for(let i = arabicArray.length - 1; i <= 0; i--){

    if(num == arabicArray[i]){

       romanNumber.push(romanArray[i]);

      break;
      

    }
    
    



  

    
  
    
    

    
    
    
  }

  
  
  return romanNumber.join("");
}

console.log(convertToRoman(40)); 