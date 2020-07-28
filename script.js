let name = 'Amanda Armbruster';
let age = '33';
let birthday = 'February 20th';
let detroitGC = 'true';
let lifeEvents = ['All of my cars have had a manual transmission', 'I have a horse', 'I make a damn good margarita'];

if (detroitGC){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit. I am currently ${age} and my birthday is on ${birthday}`);
}
else{
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids. I am currently ${age} and my birthday is on ${birthday}`);
}

for(i=0; i<lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}
let counter =0;
while(true){
    let randomNumber = Math.floor(Math.random()*10+1);
    console.log(`${randomNumber}`);
    if(randomNumber !==5){
        counter++;
        console.log(`${randomNumber}!==5`)
    }else{
        counter++;
        console.log(`5===5. It took ${counter} iterations to randomly generat the number 5.`);
        break;
    }
}
