var bio = {
    "bioPic" : "images/cake.jpg",
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
    "skills" : ["Photoshop","Illustrator","HTML5","Javascript","Illustrator"],
    "welcomeMessage" : "Twinkle, twinkle, little bat. How I wonder what you're at. Up above the world you fly, like a tea tray in the sky.",
    displayBio : function (){

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);	
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);	
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);	
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);	
		$("#header").append(formattedBioPic);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedWebsite = HTMLblog.replace("%data%", bio.contacts.website);
		$("#topContacts").append(formattedWebsite);
		
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills){
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
				$("#skills").append(formattedSkill);
				}
			}
		$("#mapDiv").append(googleMap);
		$("#footerContacts").append(formattedWebsite);
		$("#footerContacts").append(formattedLocation);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		}
}

bio.displayBio();

var education = {
	"schools": [
		{
		"name" : "School Name 1",
		"location" : "Chicago, IL, US",
		"degree" : "BFA",
		"major" : "Major 1",
		"year" : "2008"
		},
		{
		"name" : "School Name 2",
		"location" : "Elgin, IL, US",
		"degree" : "MFA",
		"major" : "Major 1",
		"year" : "2008"
		}
	],
	"online":
		[
		{
		"name" : "Udacity.com",
		"degree" : "Front End Web Developer",
		"url" : "www.udacity.com",
		"year" : "2014"
		},
		{
		"name" : "Udacity.com",
		"degree" : "HTML5 Game Development",
		"url" : "www.udacity.com",
		"year" : "2014"
		}
		],
	displayEducation : function() {

		$("#education").append(HTMLschoolStart);

		for (school in education.schools) {

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedNameDegree);

			var formattedSchoolYear = HTMLschoolDates.replace("%data%", education.schools[school].year);
			$(".education-entry:last").append(formattedSchoolYear);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		$("#education").append(HTMLonlineClasses);
		
		for (course in education.online) {

			$("#education").append(HTMLschoolStart);

			var formattedCourseSchoolName = HTMLonlineSchool.replace("%data%", education.online[course].name);
			var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.online[course].degree);
			var formattedCourseNameTitle = formattedCourseTitle + formattedCourseSchoolName;
			$(".education-entry:last").append(formattedCourseNameTitle);

			var formattedCourseDate = HTMLonlineDates.replace("%data%", education.online[course].year);
			$(".education-entry:last").append(formattedCourseDate);

			var formattedCourseURL = HTMLonlineURL.replace("%data%", education.online[course].url);
			$(".education-entry:last").append(formattedCourseURL);

		}
	}	
}

education.displayEducation();

var projects = {
	"projects": [
		{
		"title" : "project 1",
		"dates" : "Jan 2014 - Nov 2014",
		"images" : ["images/wordgame1.jpg","images/wordgame2.jpg"],
		"platform" : "browser",
		"description" : "summary about project one"
		},
		{
		"title" : "project 2",
		"dates" : "Oct 2013 - Dec 2013",
		"images" : ["images/geogame1.jpg","images/geogame2.jpg"],
		"platform" : ["iOS","browser"],
		"description" : "summary about project two"
		}
		],
		displayProjects : function() {
			$("#projects").append(HTMLprojectStart);

			for (project in projects.projects) {

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
}

projects.displayProjects();

var work= {
	"jobs": [
		{
		"employer" : "Job 1",
		"dates" : "Dec 2008 - Present",
		"location" : "Arlington Heights, IL, US",
		"title" : "Title",
		"description" : "creator of blue things."
		},
		{
		"employer" : "Job 2",
		"dates" : "Jan 2012 - Present",
		"location" : "Buffalo Grove, IL, US",
		"title" : "Title",
		"description" : "creator of ALL the things."
		},
		{
		"employer" : "Job 3",
		"dates" : "Aug 2003 - Jun 2011",
		"location" : "Schaumburg, IL, US",
		"title" : "Title",
		"description" : "creator of some things."
		}
	],
	displayWork : function() {
	
		$("#workExperience").append(HTMLworkStart);

		for (job in work.jobs) {

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
}

work.displayWork();


