// Code your solutions in this file
// Returns an array of thank you messages for each name provided to the function
let writeCards = (listOfNames, nameOfEvent) => {
   let thankYouMessages = [];
   for(let i = 0; i < listOfNames.length; i++) {
      thankYouMessages.push(`Thank you, ${listOfNames[i]}, for the wonderful ${nameOfEvent} gift!`);
   }
   return thankYouMessages;
}

// Invokes console.log once for each number, counting down from the number provided to zero
let countDown = (i) => {
   while (i >= 0) {
      console.log(i);
      i--
   }
}
