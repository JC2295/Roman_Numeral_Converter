function convertToRoman(num) {

  let arabicArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  let romanArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

  let arabicNum = num;

  let romanNum = [];

  for(let i = arabicArr.length; i >= 0; i--){

    if(Math.floor(arabicNum / arabicArr[i]) > 0){

      let divisorCount = Math.floor(arabicNum / arabicArr[i]);

      for(let j = 0; j < divisorCount; j++){
        
        romanNum.push(romanArr[i]);
          
      }

      arabicNum = arabicNum % arabicArr[i];
      
    }
    else{
      continue;
    }
  }

  let romanNumStr = romanNum.join("");

  console.log(romanNumStr);

  return romanNumStr
}

convertToRoman(10);

// Completed