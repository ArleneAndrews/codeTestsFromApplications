function maskify (cc) {
  let stringTrim = cc.trim();
  let length = stringTrim.length;
  let mask = length - 4;
  let string = "";
  let show = stringTrim.substring(mask);
  
  
  if (length > 4){
    for (i = 1; i < (mask + 1); i++){
    string = string + "#";
    }
    string = string + show;  
  }
  
  else {
    string = stringTrim;
  }
  return string
}