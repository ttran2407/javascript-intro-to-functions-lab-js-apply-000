function shout (string) {

  return string.toUpperCase();
}

function whisper (string) {

  return string.toLowerCase();
}

function logShout (string) {
string = string.toUpperCase();

  console.log(string);
}

function logWhisper (string) {
  string = string.toLowerCase();

  console.log(string);
}

function sayHiToGrandma (string) {
  //creat newString is equal string
  var newString = string;
  newString = newString.toLowerCase();
  //convert string to array to compare each word in the string
  var arr1 = string.split("");
  var arr2 = newString.split("");
  var lowerCase = 1;
  //loop through array to find out if string is lowercase
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      break;
    }
    lowerCase = 0;
  }
  // if lowerCase is 0, string contains at least one upperCase word
  if (lowerCase = 1) {return "I can't hear you!"}
}
