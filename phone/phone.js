function PhoneNumber(phoneNo) {
	this._phoneNo = phoneNo;
}

PhoneNumber.prototype.number = function() {
	if (this._phoneNo.match(/[a-zA-Z@:!]/i)) {
    	return null;
	}
    result1 = this._phoneNo.replace(/[^\w]/g, '');
	result2 = result1.replace(/[()-.+]/g, '');
	if(result2.length < 10 || result2.length > 11){
		return null;
	}
	if(result2.length == 11 && result2.charAt(0) != '1'){
		return null;
	}
	if(result2.length == 11 && result2.charAt(0) == '1'){
		return result2.substring(1);
	}
	return result2;
}

module.exports = PhoneNumber;