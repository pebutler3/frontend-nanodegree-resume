var bio = {
	'name' : 'Paul Butler III',
	'role' : 'Front-End Developer',
	'contacts' : {
		'mobile' : '(303) 513-6378',
		'email' : 'p.e.butler3@gmail.com',
	    'twitter' : '@pebutler3',
	    'github' : '@pebutler3',
	    'location' : 'Denver'
	},
	'bioPic' : 'http://pebutler3.com/assets/img/me.png',
	'welcomeMessage' : 'Welcome to my resume!',
	'skills' : [
      'HTML',
      'CSS'
	],
	display : function () {
		var header = $('#header'),
			formattedName = HTMLheaderName.replace('%data%', bio.name),
			formattedRole = HTMLheaderRole.replace('%data%', bio.role),
			formattedPic = HTMLbioPic.replace('%data%', bio.bioPic),
			formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
			formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
			formattedEmail = HTMLemail.replace('%data%', bio.contacts.email),
			formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github),
			formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
			formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

		header.prepend(formattedRole);
		header.prepend(formattedName);
        header.append(formattedPic);
        header.append(formattedWelcomeMessage);
        $('#topContacts, #footerContacts').append([
        	formattedMobile, 
        	formattedEmail, 
        	formattedGithub, 
        	formattedTwitter, 
        	formattedLocation
        ]);

		if(bio.skills.length > 0) {
			header.append(HTMLskillsStart);
			
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$('#skills').append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$('#skills').append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$('#skills').append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$('#skills').append(formattedSkill);
		}
	}
}

var work = {
	"jobs" : [
		{
			'employer' : 'CAP Management',
			'title' : 'Director, Design & Development',
			'dates' : '2012 - Present',
			'location' : 'Denver, Colorado',
			'description': 'I build dem sites!'
		}
	],
	display: function () {
		for(job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$('.work-entry:last').append([
				formattedEmployerTitle,
				formattedLocation,
				formattedDates,
				formattedDescription
			]);
		}
	}
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
bio.display();
work.display();
projects.display();
