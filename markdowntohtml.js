function markdownParser (markdown) {
  markdown = markdown.trim();
  let splitStr = markdown.split(" ");
  let count = splitStr.length;
  let level = splitStr[0].length;
  let text ="";
  
  if (markdown.startsWith("#")){
    if (level >= 7){
      string = markdown;
    }
    else {
       for (i = 1; i < count; i++){
      text = text + (splitStr[i]) + " ";
      }
    text = text.trim();
    string = "<h" + level + ">" + text +"</h" + level + ">" ;
    }
  }
  
  else {
   string = markdown;   
   }
  return string
}