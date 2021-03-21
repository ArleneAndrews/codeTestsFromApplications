const solution = number => {
  let numberArray =[];
  let newsum = 0;
  
  
  for (i=0;i<number;i++){
    if ((i % 3== 0)||(i % 5 == 0)) {
      newsum = newsum + i
    }
    
  }
 
 
  number = newsum;
  return number
}