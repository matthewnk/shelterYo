$(document).ready(function() {

	initAnimals();
});
 
function initAnimals(){

	displayAnimals(getAnimals());

	$("#reset-button").on("click", resetAnimals);
	$("#add-button").on("click", addAnimal);
}

// function resetAnimals(e){

// 	saveAnimals(initAnimalsData());
// 	displayAnimals(getAnimals());
// 	e.preventDefault();
// }

// function addAnimal(e){

// 	var name = $("#animal-name").val();
// 	var description = $("#animal-description").val();
// 	var imgUrl = $("#imgUrl").val();
// 	var entry = {"name":name,"description":description,"imgUrl":imgUrl};
// 	var existingAnimals = getAnimals();
// 	saveAnimals(existingAnimals);
// 	displayAnimals(getAnimals());
// 	resetForm();
// 	e.preventDefault();
// }

// function resetForm(){
// 	$("#animal-name").val("");
// 	$("#animal-description").val("");
// 	$("#imgUrl").val("");
// }

function displayAnimals(animalsData) {

	var $kittenList = $('#kittenList')
	$kittenList.html(" ");
	$.each(animalsData.kitten, function(index, kitten){
    $kittenList.append('<hr class="featurette-divider">' + 
    	'<div class="row featurette">'+
    		'<div class="col-md-7 col-md-push-5">' +
    			'<h2 class="featurette-heading">' + kitten.name + '</h2>' +
    			'<p class="lead">' + kitten.about + '</p>' +
    		'</div>' +
			'<div class="col-md-5 col-md-pull-7">' +
				'<img class="featurette-image img-responsive center-block img-circle" src="./img/'+ entry.url +'" width="304" height="236">' +
			'</div>'+
		'</div>');
	});
}

// function saveAnimals(animalsData){
// 	localStorage.setItem('aaaAnimals', JSON.stringify(animalsData));
// }

// function getAnimals(){

// 	var animalsString = localStorage.getItem('aaaAnimals');

// 	if(animalsString === null){

// 		return(initAnimalsData());

// 	}else{
// 		return(JSON.parse(animalsString));
// 	}
// }

function initAnimalsData(){

	var animals = {

"kittens":[ 
	  {"name":"Fluffy", "description":"This is some text about this kitten","imgUrl":"1-kitten.jpg"},
		// {'id':'2','url':'2-kitten.jpg', 'name': 'Liqour', 'about': 'This is some text about this kitten'},
		// {'id':'3','url':'3-kitten.jpg', 'name': 'Sneaky', 'about': 'This is some text about this kitten'},
		// {'id':'4','url':'4-kitten.jpg', 'name': 'Roar', 'about': 'This is some text about this kitten'},
		// {'id':'5','url':'5-kitten.jpg', 'name': 'Sleepy', 'about': 'This is some text about this kitten'},
		// {'id':'6','url':'6-kitten.jpg', 'name': 'Scratchy', 'about': 'This is some text about this kitten'}
	]
}
	return(animals);
}