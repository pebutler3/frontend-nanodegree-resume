// Bio JSON
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
      'CSS',
      'Web Design',
      'Front-End Development'
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
// Work JSON
var work = {
	"jobs" : [
		{
			'employer' : 'CAP Management',
			'title' : 'Director, Design & Development',
			'dates' : '2012 - Present',
			'location' : 'Denver, Colorado',
			'description': 'I design, develop, and maintain 20+ client websites for CAP Management.'
		},
		{
			'employer' : 'The HOA Website Company',
			'title' : 'Director of Design',
			'dates' : '2013 - Present',
			'location' : 'Denver, Colorado',
			'description': 'Not only do I aid in client acquisition, but I design & develop custom sites for each client to fit their specific needs.'
		}
	],
	display: function () {
		for(job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer),
				formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title),
				formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates),
				formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location),
				formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description),
				formattedEmployerTitle = formattedEmployer + formattedTitle;

			$('.work-entry:last').append([
				formattedEmployerTitle,
				formattedLocation,
				formattedDates,
				formattedDescription
			]);
		}
	}
}
// Projects JSON
var projects = {
	"projects" : [
		{ 
			"title" : "CAP Management",
			"dates" : "07/15-09/15",
			"description" : "stuffs",
			"images" : ['images/cap.png']
		},
		{ 
			"title" : "Woodruff Tree Service",
			"dates" : "07/15-09/15",
			"description" : "stuffs",
			"images" : ['images/woodruff.png']
		},
		{ 
			"title" : "Horizon West",
			"dates" : "07/15-09/15",
			"description" : "stuffs",
			"images" : ['images/horizon.png']
		}
	],
	display: function(){
		for(project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
				formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates),
				formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description),
				formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);

            $('.project-entry:last').append([
            	formattedTitle,
            	formattedDates,
            	formattedDescription
            ]); 

			if(projects.projects[project]) {
				for(image in projects.projects[project].images) {
					$('.project-entry:last').append(formattedImage);
				}
			}
		}
	}
}


// Education JSON
var education = { 
	"schools" : [
		{
			"name" : "Clark State",
			"location" : "Springfield, Ohio",
			"degree" : "na",
			"major" : ['Fine Arts'],
			"dates" : "2009-2010 "
		}
	],
	onlineClasses:  [
		{
			"title" : "Computer Science 101",
			"school" : "Stanford University",
			"date" : "May 28th 2015",
			"url" : "https://verify.lagunita.stanford.edu/SOA/b4e0fac9ef6a41d587d08b5eba57836a/"
		},
		{
			"title" : "1 Hour JavaScript",
			"school" : "Udemy",
			"date" : "May 7th 2014",
			"url" : "http://ude.my/UC-LECDLXMR"
		},
		{
			"title" : "Comprehensive JavaScript Programming",
			"school" : "Udemy",
			"date" : "May 21st 2014",
			"url" : "http://ude.my/UC-WT76MYI1"
		}
	],
	displaySchools: function(){
	  for(school in education.schools) {
	  	$('#education').append(HTMLschoolStart);

	  	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name),
	  		formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location),
	  		formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree),
	  		formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major),
	  		formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);

	  	$('.education-entry:last').append([
	  		formattedSchoolName,
	  		formattedSchoolLocation,
	  		formattedSchoolDegree,
	  		formattedSchoolMajor,
	  		formattedSchoolDates
	  	]);
	}
	$('#education').append(HTMLonlineClasses);
  	$("#education").append(HTMLschoolStart);
  	for(classes in education.onlineClasses) {

	var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineClasses[classes].title),
		formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineClasses[classes].school),
		formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineClasses[classes].date),
		formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineClasses[classes].url);

	$('.education-entry:last').append([
		formattedOnlineTitle,
		formattedOnlineSchool,
		formattedOnlineDates,
		formattedOnlineURL
	]);
  	}
  }
}



function inName() {
  var splName = bio.name.trim().split(' ');
  firstName = splName[0].slice(0,1).toUpperCase() + splName[0].slice(1).toLowerCase();
  lastName = splName[1].toUpperCase();

  console.log(firstName + ' ' + lastName);
  return firstName + ' ' + lastName;
}
inName(bio.name);

// $('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);


bio.display();
work.display();
projects.display();
education.displaySchools();
