function repeatString(str, num) {
    var message = "";
    var errorMsg = "ERROR"; 
    var i;
    for (i = 0; i < num; i++) {
      message += str;
    }
      if (num>0){
        return message;
      }
      else if (num<0){
        return errorMsg;
      }
      else{
        return str = "";
      }
    
    repeatString("hey", 3);
}
        
// Do not edit below this line
module.exports = repeatString; 