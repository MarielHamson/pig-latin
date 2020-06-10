// Business Logic
function pigLatin(sentence) {
  const firstLetter = sentence.charAt(0);
  const slicedSentence = sentence.slice(1, sentence.length);
  const sentenceArray = sentence.split("");

  if (sentenceArray[0] === "a" || sentenceArray[0] === "e" || sentenceArray[0] ===  "i" || sentenceArray[0] ===  "o" || sentenceArray[0] ===  "u") {
    return sentence + "way"
  } else if (sentenceArray[0] !== "a" || sentenceArray[0] !== "e" || sentenceArray[0] !==  "i" || sentenceArray[0] !==  "o" || sentenceArray[0] !==  "u" && 
            sentenceArray[1] === "a" || sentenceArray[1] === "e" || sentenceArray[1] ===  "i" || sentenceArray[1] ===  "o" || sentenceArray[1] ===  "u") {
    return  sentenceArray.join("").slice(1) + sentenceArray[0] + "ay";
  } 
  else {return slicedSentence + sentenceArray[0] + sentenceArray[1] + "ay"}
};



// UI Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    const sentence = $("input#sentence").val();
    const result = pigLatin(sentence);
    $("#result").text(result);
  console.log()
  });
});
