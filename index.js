function scuberGreetingForFeet(ride){
  // Write your code here!
  if ( ride >= 199 && ride <= 400){
    return 'This one is on me!';
  } else if (ride > 400  && ride < 2000){
    return 'That will be twenty bucks.';
  } else if (ride > 2000 && ride <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    return 'No can do.';
  }
}
console.log(scuberGreetingForFeet(400));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(City){
return City === 'NYC'? 'Ok, sounds good.':'No go.';
}
console.log(ternaryCheckCity('Algers'))

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
    return 'Bye.'
  }
}
console.log(switchOnCharmFromTip('not as generous'))
