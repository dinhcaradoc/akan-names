var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	function getDayofWeek(){
		var dob = parseInt(document.getElementById('dateOfBirth').value);
		
		var day = parseInt(dob.getDate());
		var month = parseInt(dob.getMonth());
		var year = parseInt(dob.getYear());
		var cent = parseInt(year.substr(0,2));
		var ury = parseInt(year.substr(-3, 2));


		d = (((cent/4)-2)*(cent-1) + (5*ury/4) + (26*(month+1)/10) + day)%7;
		return d;
	};
	
	function findGender(){
		var genderR = document.getElementsByName("gender");

		for (var i = 0, length = genderR.length; i < length; i++) {
			if (genderR[i].checked) {
				gender = genderR[i].value;
				return gender;
			};
			} 
	}

	function findAkanName(){
		var dayOfWeek = getDayofWeek();
		var gender = findGender();
		var name = "";

		if (gender ==="male"){
				name = maleNames[d];
			} 
			else {
				name = femaleNames[d];
			}
			//concat the day born and the Akan name
			document.getElementById("akanName").innerHTML = ("You were born on " + dayOfWeek + " and your Akan Name is" + name);
	}