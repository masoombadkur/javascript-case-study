function School() { 
	this.students = {};
}

School.prototype.roster = function() { 
	return this.students;
}

School.prototype.add = function(studentName, grade) {
	if( this.students[grade]) {
		this.students[grade].push(studentName);
		this.students[grade].sort();
	}
	else{
		this.students[grade] = [studentName];
	}
}

School.prototype.grade = function(grade) { 
	if(this.students[grade]){
		return this.students[grade];
	}
	return []; 
}

module.exports = School;