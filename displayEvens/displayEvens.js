// let startNum = 4;
// let endNum = 20;
// let step = 3;

// for(i = startNum; i <= endNum; i + step){
//     if(startNum % 2 == 0) {
//         document.write(startNum);
//     }
// }

function displayEvens() {
    let num1 = Number(document.forms["numberFun"]["num1"].value);
    let num2 = Number(document.forms["numberFun"]["num2"].value);
    let step = Number(document.forms["numberFun"]["step"].value);

    if(num1 == "" || isNaN(num1) || num2 == "" || isNaN(num2 || step == "" || isNaN(step)){
        alert("Must be filled with a number.");
    document.forms["numberFun"]["num1"]
    
    }
    
    for(i = num1; i <= num2; i += step){
        
        
    }
    return false;
}