$(document).ready(function(){

	function printNews(){
		$('.news').append('<p class="apendice">NUEVAS NOTICIAS</p>');
	}

	printNews();

	function renderHighlightedRecipes(recipesArray){

	recipesArray.forEach(function(e){
		if(e.highlighted == true){
			renderRecipe(e);
			};
		});
	};

	renderHighlightedRecipes(recipesArray);

	renderActivities(activitiesArray);

});

function renderRecipe(recipe) {

	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe">' + recipe.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span> </span></span></span><img src="img/recipes/320x350/' + recipe.name + '.jpg"/></a>');
	
}

function renderActivities(activitiesArray) {

	activitiesArray.forEach(function renderActivity(recipe){
		if(activitiesArray.length > 0){
			$('.wrapper-message').hide();
		}
	});

	$('.list-activities').append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="img/acitivity/' + activitiesArray.userAvatar + 'class="image-avatar"></span><span class="meta"><span class="author">' + acitivitiesArray.userName + '</span> made <span class="recipe">' + acitivitiesArray.recipeName + '</span>:' + activitiesArray.text + '<span class="location">&mdash;' + activitiesArray.place + '</span></span></span><div class="bg-image" style="background-image: url(' + activitiesArray.image + ');"></div></a>')
}





