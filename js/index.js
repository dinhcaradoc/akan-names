var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	function getDayofWeek(){
		
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
		var dob = document.getElementById('dateOfBirth').value;
		var anyt = new Date(dob);
		var d = anyt.getDay();
		var dayOfWeek = days[d];
		console.log(d);

		var gender = findGender();
		var name = "";

		if (gender ==="male"){
				name = maleNames[d];
			} 
			else {
				name = femaleNames[d];
			}
			//concat the day born and the Akan name
			document.getElementById("akanName").innerHTML = ("You were born on " + dayOfWeek + " and your Akan Name is " + name);
	}