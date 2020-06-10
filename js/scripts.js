// Business Logic
function pigLatin(sentenceArray) {
  sentenceArray.split();
};



// UI Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    const sentence = $("input#sentence").val();
    let sentenceArray = []
    sentenceArray.push(sentence);
    console.log(sentenceArray);
  });
});
pigLatin(sentenceArray);