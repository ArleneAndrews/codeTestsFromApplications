function getMiddle (str) {
  let string ="";
  const length = str.length;
  const half = ((str.length)%2);
  
  if (length == 1) {
    string = str;
  }
  
  else if (half != 0){ 
    string = str.charAt(str.length/2);
   }

  else 
  {
    let string1 = str.charAt((str.length-1)/2);
    let string2 = str.charAt((str.length+1)/2);
    string =string1+string2;
  }
  return string
}