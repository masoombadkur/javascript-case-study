function Who() {

	// this.name = function(name) {

	// 	result = "";
		
	// 	if(name == null){
	// 		result = 'One for you, one for me.';
	// 	}else {
	// 		this._name = name;
	// 		result = 'One for ' + this._name + ', one for me.';
	// 	}
	// 	return result;
		
	// }

}

Who.prototype.name = function(name) {

		result = "";
		
		if(name == null){
			result = 'One for you, one for me.';
		}else {
			this._name = name;
			result = 'One for ' + this._name + ', one for me.';
		}
		return result;
		
	}
module.exports = Who;

