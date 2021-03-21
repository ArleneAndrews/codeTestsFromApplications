function validBraces(braces){
  let match;
  let ch;
  let stack = [];
  let opens = ['[', '{', '('];
  let close = [']', '}', ')'];
  
   if (braces.length <= 1){
    return false;
   }
  
    else{
        for (let i = 0; i < braces.length; i++) {
        ch = braces[i];

        if (close.indexOf(ch) > -1) {
          match = opens[close.indexOf(ch)]
          if (stack.length == 0 || (stack.pop() != match)) {
            return false
          }
      } 
    else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)
  }
}