function scuberGreetingForFeet(deep) {
  // Write your code here!
  // if(deep < 400){
  //   return "This one is on me!"
  // }else if(deep < 2500 ){
  //   return 'I will gladly take your thirty bucks.'
  // }else{
  //   return "No can do."
  // }
  if (deep < 400) return "This one is on me!";
  else if (deep < 2500) return "I will gladly take your thirty bucks.";
  else return "No can do.";
}

function ternaryCheckCity(city) {
  // Write your code here!
if(city === "NYC") return "Ok, sounds good."
else return "No go."
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  // if (tip > 20) return "Thank you so much."
  // else if(15 < tip < 20) return "Thank you."
  // else return "Bye."
  switch(tip){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:  return "Bye."
  }
}
