let question1=prompt("Enter a number");
let question2=prompt("Enter an math operator.");
let question3=prompt("Enter a second number.");

let result;
let result2;
let result3;
let result4;

if(isNaN(question1)){
   result="error"
}else if (typeof(question1)){
    result=question1
}

if(question2==="+"||question2==="-"||question2==="*"||question2==="/"){
    result2=question2
}else if(question2 === "+"){
    result4=question1+question3;
}else if(question2 === "-"){
    result4=question1-question3;
}else if(question2 === "*"){
    result4=question1*question3;
}else if(question2 === "/"){
    result4=question1/question3;
}else {
    result2 = "error"
}

if(isNaN(question3)) {
    result3 = "error"
}else if (typeof(question3)){
    result3=question3
}

document.body.innerHTML= result+" "+result2+" "+result3+" = "+result4;