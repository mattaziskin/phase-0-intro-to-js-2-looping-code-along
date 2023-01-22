// Code your solutions in this file


function writeCards(name){
    const message = [];
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    console.log(message);
return message;
}



function countDown(number){
    for(let i = 0; i <= number; number--) {
        console.log(number);
    }

}

