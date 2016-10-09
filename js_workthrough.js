// your code here!

// var user_words = "";

// $(document).ready(function() {

//  $("button").click(function() {
//    user_words = $("textarea").val();
//    console.log(user_words);
//  });




// });



// need to display:  
// word count

// unique word count,

// average word length
// average sentence length

// why does console log disapear so quickly?

// arr4 = str3.toLowerCase().split(" ");  = a lower-case array of user_words

var testString = "You're so good good at coding! This is an beautiful beautiful day, right? I am sitting at a chair.";
var wordArr = testString.toLowerCase().split(" ");
// console.log(wordArr);
// console.log(wordArr.length);


// ["you're", "so", "good", "at", "coding!", "this", "is", "an", "beautiful", "day,", "right?", "i", "am", "sitting", "at", "a", "chair."]

var uniqueWord = [];
for (var i = 0; i <= wordArr.length; i++) {
  var uniqueWordCount = 0;
  var isUnique = wordArr[i];
  for (var word in wordArr){
    if (wordArr[i] === wordArr[word]) {
      uniqueWordCount += 1;
    }
  };
  if (uniqueWordCount === 1) {
    uniqueWord.push(wordArr[i]);
  }
  // how many unique words?
};

//console.log(uniqueWord.length);



var counter = 0;
// loop through the array of words
// at every word, we split the word into an array of characters
// we add the length of the array of characters to counter
// after the for loop, then we devide counter by the length of the word array

for (var i = 0; i < wordArr.length; i++) {
var wordSplit = wordArr[i].split("");
counter += wordSplit.length;
}

//console.log(counter / wordArr.length);

// loop through the array of words
// split the words at punctuation
// add the length of those arrays to counter
// after we divide counter by arrays that we come up with

//   string is called testString
var counter2 = 0;

var sentence = testString.match( /[^\.!\?]+[\.!\?]+/g );
console.log(sentence);

for (var i = 0; i < sentence.length; i++) {
  var numWords = sentence[i].split(" ");
  counter2 += numWords.length;
}
console.log(counter2 / sentence.length);

































