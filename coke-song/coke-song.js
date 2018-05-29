function CokeSong() {

}

CokeSong.prototype.verse = function(verseNumber) {

	line1 = verseNumber + ' cans of coke in the box, ' + verseNumber + ' cans of coke.\n';

	line2 = 'Take one down and pass it around, ' + (verseNumber - 1) + ' cans of coke in the box.\n';

	if(verseNumber == 2){
		line2 = 'Take one down and pass it around, ' + (verseNumber - 1) + ' can of coke in the box.\n';
	}

	if(verseNumber == 1){
		line1 = verseNumber + ' can of coke in the box, ' + verseNumber + ' can of coke.\n';
		line2 = 'Take it down and pass it around, no more cans of coke in the box.\n';
	}

	if(verseNumber == 0){
		line1 = 'No more cans of coke in the box, no more cans of coke.\n';
		line2 = 'Go to the store and buy some more, 99 cans of coke in the box.\n';
	}

	return line1 + line2;

}

CokeSong.prototype.sing = function(startVerseNumber, endVerseNumber) {

	result = "";

	if((startVerseNumber == undefined || startVerseNumber == null) && (endVerseNumber == undefined || endVerseNumber == null)){
		startVerseNumber = 99;
		endVerseNumber = 0;
	}

	if(endVerseNumber == undefined || endVerseNumber == null){
		endVerseNumber = 0;
	}

	for (var i = startVerseNumber; i >= endVerseNumber; i--) {
		if(i == endVerseNumber){
			result = result + this.verse(i);
		} else {
			result = result + this.verse(i) + '\n';
		}
		
	}

	return result;

}

module.exports = CokeSong;