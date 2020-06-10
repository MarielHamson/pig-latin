// Business Logic
function pigLatin(sentence) {
  const firstLetter = sentence.charAt(0);
  const slicedSentence = sentence.slice(1, sentence.length);
  const sentenceArray = sentence.split("");
  const vowelList = "aeiouAEIOU";
  console.log(sentenceArray);
  if (sentenceArray[0] === "a" || sentenceArray[0] === "e" || sentenceArray[0] ===  "i" || sentenceArray[0] ===  "o" || sentenceArray[0] ===  "u"){
    return sentence + "way"
  } else if (sentenceArray[0] !== "a" || sentenceArray[0] === "e" || sentenceArray[0] ===  "i" || sentenceArray[0] ===  "o" || sentenceArray[0] ===  "u" && 
            sentenceArray[1] !== "a" || sentenceArray[0] === "e" || sentenceArray[0] ===  "i" || sentenceArray[0] ===  "o" || sentenceArray[0] ===  "u") {
    return  sentenceArray.join("").slice(2) + sentenceArray[0] + sentenceArray[1] + "ay";
  } else {return slicedSentence + sentenceArray[0] + "ay"}
};



// UI Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    const sentence = $("input#sentence").val();
    const result = pigLatin(sentence);
    $("#result").text(result);
  //   if (sentence.charAt(0) === "a" || sentence.charAt(0) === "e" ||sentence.charAt(0) ===  "i" ||sentence.charAt(0) ===  "o" ||sentence.charAt(0) ===  "u"){return sentence + "way"
  // }else {return sentence}
  console.log()
  });
});
