// your code here!

// var user_words = "";

$(document).ready(function() {

	$("button").click(function(e) {
		e.preventDefault();
		$("dl").removeClass("hidden");
		user_words = $("textarea").val();
		console.log(user_words);
		var wordArr = user_words.toLowerCase().split(" ");
		console.log(wordArr.length);
		$(".js-word-count").append(wordArr.length);

// unique word count

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
	};
	console.log(uniqueWord.length);
	$(".js-unique-word-count").append(uniqueWord.length);

// average word length

	var counter = 0;

	for (var i = 0; i < wordArr.length; i++) {
	var wordSplit = wordArr[i].split("");
	counter += wordSplit.length;
	}

	console.log(counter / wordArr.length);
	$(".js-avg-word-length").append(counter / wordArr.length);
	});

// average sentence length

	var counter2 = 0;

	var sentence = testString.match( /[^\.!\?]+[\.!\?]+/g );
	console.log(sentence);

	for (var i = 0; i < sentence.length; i++) {
		var numWords = sentence[i].split(" ");
		counter2 += numWords.length;
	}
	console.log(counter2 / sentence.length);
	$(".js-avg-sentence-length").append(counter2 / sentence.length);


});


var testString = "You're so good good at coding! This is an beautiful beautiful day, right? I am sitting at a chair.";
var wordArr = testString.toLowerCase().split(" ");
// **************************** word count =
// console.log(wordArr.length);


// unique word function:
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

};

//console.log(uniqueWord.length);



// ******* average word length
var counter = 0;

for (var i = 0; i < wordArr.length; i++) {
var wordSplit = wordArr[i].split("");
counter += wordSplit.length;
}

//console.log(counter / wordArr.length);

//************ average sentence length

var counter2 = 0;

var sentence = testString.match( /[^\.!\?]+[\.!\?]+/g );
console.log(sentence);

for (var i = 0; i < sentence.length; i++) {
	var numWords = sentence[i].split(" ");
	counter2 += numWords.length;
}
// console.log(counter2 / sentence.length);

































