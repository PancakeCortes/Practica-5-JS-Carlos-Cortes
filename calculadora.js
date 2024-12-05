
const getRandomNumber = () => Math.floor(Math.random() * 10);

const n1 = getRandomNumber();
const n2 = getRandomNumber();


const problemInWords = `What is ${n1} + ${n2}?`;
console.log(problemInWords);

let userResponse = Number(prompt(problemInWords));
console.log("User entered:", userResponse); 


while (userResponse !== n1 + n2) {
    console.log("Wrong answer! Try again.");
    userResponse = Number(prompt(problemInWords));
    console.log("User entered:", userResponse); // Para depuración
}

const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
alert(messages[Math.floor(Math.random() * messages.length)]);