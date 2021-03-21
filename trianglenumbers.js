function triangular (n) {
  let tn = n;
  let result = "";
  
  if (tn <= 0){
    return 0;
  }
  
  else {
    result = (tn * (tn + 1))/2;
    return result;
  }