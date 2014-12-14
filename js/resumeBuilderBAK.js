var bio = {
    "bioPic" : "image.jpg",
    "name" : "Katie McCarthy",
    "contacts" : 
    	{
    	"website" : "www.digikatie.com",
    	"github" : "aChocolateCake",
    	"email" : "katie@digikatie.com",
    	"location" : "Arlington Heights, IL, US",
    	"twitter" : "@digikatie"
    	},
    "role" : "Game Developer",
    "skills" : ["Photoshop","Illustrator","HTML5","Javascript"],
    "welcomeMessage" : "hai"
}

var education = {
	"schools": [
		{
		"name" : "School Name 1",
		"location" : "Chicago, IL, US",
		"degree" : "BFA",
		"major" : "Major",
		"year" : "2008"
		},
		{
		"name" : "School Name 2",
		"location" : "Elgin, IL, US",
		"degree" : "MFA",
		"major" : "Major",
		"year" : "2008"
		}
	],
	"online courses":
		[
		{
		"name" : "Udacity.com",
		"degree" : "Front End Web Developer",
		"url" : "www.udacity.com",
		"year" : "2014"
		}
		]
}

var projects = {
	"projects": [
		{
		"title" : "project 1",
		"dates" : "Jan 2014 - Nov 2014",
		"images" : ["images/fry.jpg","images/fry.jpg"],
		"platform" : "browser",
		"description" : "summary about project one"
		},
		{
		"title" : "project 2",
		"dates" : "Oct 2013 - Dec 2013",
		"images" : ["images/fry.jpg","images/fry.jpg"],
		"platform" : ["iOS","browser"],
		"description" : "summary about project two"
		}
	]
}

var work= {
	"jobs": [
		{
		"employer" : "digikatie",
		"dates" : "forever",
		"location" : "Arlington Heights, IL, US",
		"title" : "creator of arts",
		"description" : "create and sell personal artwork"
		},
		{
		"employer" : "AmerisourceBergen Technology Group",
		"dates" : "Jan 2012 - Current",
		"location" : "Buffalo Grove, IL, US",
		"title" : "Call Router, Inside Sales Manager",
		"description" : "routed ALL the calls! sold ALL the contracts!"
		},
		{
		"employer" : "Medieval Times Dinner & Tournament",
		"dates" : "Aug 2003 - Jun 2011",
		"location" : "Schaumburg, IL, US",
		"title" : "Reservations, Sound & Lighting Technician, Marketing & Sales Assistant",
		"description" : "did ALL the things!"
		}
	]
}


//function displaySkills(){
	//$("#header").append(HTMLskillsStart);
		//for (skill in bio.skills) {	
		//$("#skills").append(formattedSkill);
		//var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
	//}
//}
// $("#header").append(HTMLskillsStart);

// function displaySkills(){
// 	for (skill in bio.skills) {	
// 		$("#skills").append(formattedSkill);
// 		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
// }
// }

// displaySkills();

function displayWork() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart); 

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


projects.display();


$("#mapDiv").append(googleMap);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedEducation = HTMLschoolName.replace("%data%", bio.name);
//var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedLocation);
$("#skillsChart").append(formattedSkills);

$("#main").append(formattedEducation);
//$("#workExperience").append(formattedWork);

// if (bio.skills.length > 0) {
// 	$("header").append("HTMLskillsStart");
// 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);

// } else {

// 	console.log("false")
// }


//for(var i=0; i<9; i++){
    //console.log(i);
//}

//var countries = ["Germany", "Argentina", "Brazil", "Netheralnds"];

//    for (country in countries){
//        console.log(countries[country]);
 //   }

// write a for-in loop that iterates over all the jobs in your work object and .append()s a new htmlworkStart element for each one.

//for (job in work.jobs){
	//$("#workExperience").append(htmlworkStart);
	//var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	//var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	//var formattedEmployerTitle = formattedEmployer + formattedTitle;

	//$("work-entry:last").append(formattedEmployerTitle);
	//}
	
	//use a for loop to append()s a new htmlworkStart element for each job.
