function calculate(str) {
    strArray = str.split(" ");    
    let answer;    
    const firstNumber = strArray[0].length;
    const secondNumber = strArray[2].length;
    switch (strArray[1]) {
      case "+":
        answer = strArray[0] + strArray[2];
        break;
      case "-":
        answer = "";
        for( let i=0; i < firstNumber - secondNumber; i++) {
          answer = answer + ".";        
        }
        break;  
        case "*":
        answer = "";
        for( let i=0; i < firstNumber * secondNumber; i++) {
          answer = answer + ".";        
        }
        break;  
        case "//":
        answer = "";        
        for( let i=0; i < Math.trunc(firstNumber / secondNumber); i++) {
          answer = answer + ".";        
        }
        break;  
    }    
    return answer;
  }
  
  console.log(calculate("..... + ..............."));  