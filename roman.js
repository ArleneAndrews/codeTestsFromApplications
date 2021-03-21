function decode (roman) {
  let length = roman.length;
  let number = 0;
  
  for (let i = 0; i < length; i+= 1){
    console.log (roman.charAt(i));
        
    if (roman.charAt(i) == "M"){
     number = number + 1000;
    }
    
    else if (roman.charAt(i) == "C"){
     if (roman.charAt(i).concat(roman.charAt(i + 1)) == "CM"){
      number = number + 900;
      i++;
      }
     else if (roman.charAt(i).concat(roman.charAt(i + 1)) == "CD")
      {
      number = number + 400;
      i++;
      }
     else
      {
      number = number + 100;
      }
    }
    
    else if (roman.charAt(i) == "D"){
      number = number + 500;
    }
    
    else if (roman.charAt(i) == "X"){
     if ((roman.charAt(i)).concat((roman.charAt(i + 1))) == "XC"){
      number = number + 90;
      i++;
      }
      else if ((roman.charAt(i)).concat((roman.charAt(i + 1))) == "XL")
      {
      number = number + 40;
      i++;
      }
      else
      {
      number = number + 10;
        console.log(number);
      }
    }
    
    else if (roman.charAt(i) == "L"){
      number = number + 50;
   }
    
    else if (roman.charAt(i) == "I"){
     if ((roman.charAt(i)).concat((roman.charAt(i + 1))) == "IX"){
      number = number + 9;
      i++;
      }
      else if ((roman.charAt(i)).concat((roman.charAt(i + 1))) == "IV")
      {
      number = number + 4;
      i++;
      }
      else
      {
      number = number + 1;
      }
    }
    else {
      number = number + 5;
    }
  }
  return number;
}