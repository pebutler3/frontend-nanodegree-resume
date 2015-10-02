var body = $('body');
var skills = ['HTML', 'CSS', 'Sketch3', 'jQuery'];
var bio = {
	'name' : 'Paul Butler III',
	'role' : 'Front-End Developer',
	'contacts' : {
		'email' : 'p.e.butler3@gmail.com',
	    'cell' : '(303) 513-6378',
	    'twitter' : '@pebutler3',
	    'github' : 'twitter',
	    'location' : 'Denver, Colorado'
	},
	'pictureURL' : 'http://pebutler3.com/assets/img/me.png',
	'welcomeMessage' : 'Welcome to my resume!',
	'skills' : skills
}

// bio` contains:
//             name : string
//             role : string
//             contacts : an object with
//                   mobile: string
//                   email: string 
//                   github: string
//                   twitter: string 
//                   location: string
//             welcomeMessage: string 
//             skills: array of strings
//             biopic: url
//             display: function taking no parameters

$('#header').append(bio.name);
var work = {
	"jobs" : [
		{
			'employer' : 'CAP Management',
			'title' : 'Director, Design & Development',
			'dates' : '2012 - Present',
			'location' : 'Denver, Colorado',
			'description': 'I build dem sites!'
		}
	]
}

var projects = {
	"projects" : [
		{ 
			"title" : "Maloney Painting",
			"dates" : "07/15-09/15",
			"description" : "stuffs",
			"images" : []
		},
		{ 
			"title" : "Woodruff Tree Service",
			"dates" : "07/15-09/15",
			"description" : "stuffs",
			"images" : []
		},
		{ 
			"title" : "Horizon West",
			"dates" : "07/15-09/15",
			"description" : "stuffs",
			"images" : []
		}
	]
}


// Education JSON
var education = { 
	"schools" : [
		{
			"name" : "Free Code Camp",
			"city" : "San Francisco",
			"location" : "Online"
		},
		{
			"name" : "Udacity",
			"city" : "San Francisco",
			"location" : "Online"
		}
	]
}

if(bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$('#skills').append(formattedSkill);
}

/*

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

*/

function displayWork() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedDescription);
	}
}
displayWork();

// $(document).click(function(loc){
// 	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x, y);
// });


function inName() {
  var splName = bio.name.trim().split(' ');
  firstName = splName[0].slice(0,1).toUpperCase() + splName[0].slice(1).toLowerCase();
  lastName = splName[1].toUpperCase();

  console.log(firstName + ' ' + lastName);
  return firstName + ' ' + lastName;
}
inName(bio.name);

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

projects.display = function () {
	for(project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if(projects.projects[project].images > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].Image);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}
projects.display();




