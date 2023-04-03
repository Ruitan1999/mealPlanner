// send req btn click
document.querySelector('#send-req').addEventListener('click', () => {
    // empty result div
    document.querySelector('#results').innerHTML = ''

    // show loading annimation
    document.querySelector('.loading').style.display ='block'


    let query = document.querySelector('#query').value
    apiRequest(query)
})


function apiRequest (query) {

    let queryEncoded = encodeURI(query)

    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${queryEncoded}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a"
	}
})
.then(res => res.json ())
.then(res => {
    // Hide loading annimation
    //document.querySelector('.loading').style.display ='none'
    res.recipeData.forEach(recipe => {
        renderRecipeDiv(recipe)
    })
})

.catch(err => {
	console.log(err);
});
}

function renderRecipeDiv(recipe) {

    let RecipethumbSrc = recipe.thumbnails[0].url
    // create elements 
    // recipeDiv 
    let recipeDiv = document.createElement('div')
    recipeDiv.className = 'recipe-entry'

    // recipe title 
    let recipeTitle = document.createElement('h2')
    recipeTitle.innerText = food.label

    // recipe content 
    let recipeContent = document.createElement('div')
     recipeContent.className = 'content'

    // recipe Thumb 
    let recipeThumb = document.createElement('img')
    recipeThumb.src = recipeThumbSrc

    // videoLink
    let recipeLink = document.createElement('a')
    recipeLink.href = videoUrl
    recipeLink.innerText = 'Start Seraching'
    recipeLink.target = "_blank"

    // inserts /append
    recipeContent.append(recipeTitle)
    recipeContent.append(recipeLink)
    recipeDiv.append(recipeThumb)
    recipeDiv.append(recipeContent)

    // inster /append into results div
    document.querySelector('#results').append(recipeDiv)

}