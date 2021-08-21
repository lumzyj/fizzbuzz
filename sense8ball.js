//  A sense 8 ball game that genarates defferent out come for the question asked 
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('what is your name');
 console.log(`welcome ${name}`);
     

let userQuestion = prompt('ask me anything')
console.log(`${userQuestion}`);

const randomNumber = Math.floor(Math.random()* 8);
/* the swich statement below checks for the condition of each numbers generated from 1- 8 and if it matches the condition for each case, generates the out put */
switch (randomNumber){
  case 0:
  eightBall = 'It is certain'
  break;
case 1 :
  eightBall = 'Without a doubt'
  break;
case 2:
  eightBall = 'My reply is a no'
  break;
case 3 :
  eightBall = 'Cannot predict now'
  break;
case 4:
  eightBall = 'Do not count on it'
  break;
 case 5:
   eightBall = 'As i see it yes'
   break;
  case 6 :
   eightBall = 'Outlook not so good'
   break;
case 7 :
 eightBall = 'Signs point to yes'
 break;

}
console.log(`The eight ball answered: ${eightBall}`);