// Business Logic
// function pigLatin(sentence) {
//   const firstLetter = sentence.charAt(0);
//   const slicedSentence = sentence.slice(1, sentence.length);
//   const sentenceArray = sentence.split("");
//   for (let i = 0; i <= sentence.length-1; i++) {
//     if (sentenceArray.includes("a","e","i","o","u")) {
//       const arraySlice = sentenceArray.slice(0,i)
//       return sentenceArray.join("") + arraySlice + "way";
//     } else {return sentenceArray.join("").slice(i) + sentenceArray.slice(0, i+1) + "way"}
//   };
// };

// UI Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    const sentence = $("input#sentence").val();
    const result = pigLatin(sentence);
    $("#result").text(result);
  });
});


//   if (sentenceArray[0] === "a" || sentenceArray[0] === "e" || sentenceArray[0] ===  "i" || sentenceArray[0] ===  "o" || sentenceArray[0] ===  "u") {
//     return sentence + "way"
//   } else if (sentenceArray[0] !== "a" || sentenceArray[0] !== "e" || sentenceArray[0] !==  "i" || sentenceArray[0] !==  "o" || sentenceArray[0] !==  "u" && 
//             sentenceArray[1] === "a" || sentenceArray[1] === "e" || sentenceArray[1] ===  "i" || sentenceArray[1] ===  "o" || sentenceArray[1] ===  "u") {
//     return  sentenceArray.join("").slice(1) + sentenceArray[0] + "ay";
//   } 
//   else {return slicedSentence + sentenceArray[0] + sentenceArray[1] + "ay"}

function vowel(letter) {
  if (vowels.indexOf(letter) !-1) {
    return true;
  } else {
    return false;
  }
  }

  const vowels = "aeiouAEIOU";

function pigLatin (sentence) {
  for (let i = 0; i <= sentence.length-1; i++) {
    if (vowel(sentence[i])) {
      return sentence.slice(i) + sentence.slice(0,i) + 'ay';
    }
  }  
}