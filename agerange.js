/*
This program categorises people into different age group based on their age 
*/

const ageRange = [1, 5, 10, 15, 19, 29, 30, 39, 49, 50, 100, 101, 200,'apple']

/*
 the variable ageRange above  is an array which holds diffent values of different age group and more
  */


for ( let i = 0; i < ageRange.length; i++){

//the for loops moves from 0 to the last array value
  
  /*
   The else if statement below checks if the condition for each value in the array is met, and sort them into the required age group 
   */


  if (ageRange[i] <= 5){
     console.log('You are an Infant!')
  }
else if (ageRange[i] <= 12){
    console.log('You are a Child!')
} 
else if (ageRange[i] <= 19){
    console.log('You are a Teenager')
}
else if (ageRange[i] <= 40){
    console.log('You are an Adult!')
}
else if (ageRange[i] <= 100 ){
    console.log('You are Old!')
}else if (ageRange[i] >= 101){
  console.log('Acient of days')
}

else {
    console.log(' No Category')

}
}
