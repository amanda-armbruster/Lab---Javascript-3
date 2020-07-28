let hours=20;
let wage=10;
let totalPaycheck=0;

if(hours <=40){
    totalPaycheck=hours*wage;
} else{
    let regularhours = hours * wage;
    let overtime= (hours - 40) * (wage * 1.5);
    totalPaycheck= regularhours + overtime;
   
}
console.log(totalPaycheck)