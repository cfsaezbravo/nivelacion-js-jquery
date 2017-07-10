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

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	/*renderHighlightedRecipes(recipesArray);*/

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {


	console.log('Voy a pintar la receta: ', recipe);
	
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


