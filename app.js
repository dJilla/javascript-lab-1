let fullName = 'Mitch Cuckovich';

let age = 25;

let birthDay = 'January 24';

let pineapplePizza = true;

let lifeEvents = ['I was born in Troy, Michigan.', 'I went to Hope College.', 'I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.', 'I am a graduate of a Grand Circus Bootcamp.'];

if (pineapplePizza = true) {
    
    console.log(`My name is ${fullName} and I like pineapples on pizza. I'm currently ${age} years old and my birthday is on ${birthDay}.`);

} else {

    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthDay}.`);

}

for (let i = 0; i < lifeEvents.length; i++) {
    
    console.log(lifeEvents[i]);

}

let counter = 0;

while (true) {

    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 5 || randomNumber > 5) {

            counter++;
            console.log(`${randomNumber} !== 5.`);

    } else {

        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`)
        break;
    }
}