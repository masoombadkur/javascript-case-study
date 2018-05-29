function lazyGuy() {

}

lazyGuy.prototype.hey = function(message) {
	reply = 'Whatever.';
	negativeWords = ['HATE'];

	if(/^[\s]+$/.test(message) || message.length == 0) {

		reply = 'Fine. Be that way!';
		
	} else if((/^[A-Z!\s]+$/.test(message) && message.slice(-1) == '!') 
		|| (/^[A-Z\s]+$/.test(message)) 
		|| (message.match(/[0-9]/i) && message.slice(-1) == '!')
		|| (message.match(/[%^*@#$(*^)]/i))){

		reply = 'Whoa, chill out!';

	} else if((/^[A-Z?\s]+$/.test(message)) && message.slice(-1) == '?'){

		reply = "Calm down, I know what I'm doing!";

	} else if(message.slice(-1) == '?'){

		reply = 'Sure.';

	} 
	return reply;
}

module.exports = lazyGuy;