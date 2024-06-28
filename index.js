

function scuberGreetingForFeet(x){
  if(x <= 400){
    return "This one is on me!";
  }else if(x > 400 && x <= 2000){
    return "That will be twenty bucks.";
  }else if( x >2000 && x <= 2500){
    return "I will gladly take your thirty bucks.";
  }else {
    return "No can do."
    }
  }
    
function ternaryCheckCity(myCity){
  return myCity === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(Tip){
  switch (Tip){
  case "generous":
    return "Thank you so much.";
  case "not as generous":
    return "Thank you.";
  default:
      return "Bye."
  }
}