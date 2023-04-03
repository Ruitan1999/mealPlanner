
// btn click
document.querySelector('#send-req').addEventListener('click', ()=> {
    // get query form the input #query
    let query = document.querySelector('#query').value
    apiRequest (query)

})

function apiRequest(query){

fetch(`https://rapidapi.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${query}&timeFrame=day`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a"
	}
})
.then(res => res.json())
.then(res => {
    
    console.log(res.meals)
    

    res.meals.forEach(meal => {
       
        renderMealDiv(meal)
    })
    
})
.catch(err => {
	console.error(err);
});
}

    document.getGetElementById("query").submit() 

function renderMealDiv (meal) {
    // get result div
    let resultsDiv = document.querySelector('#results')


    // create elements
    let mealHeading = document.createElement ('h1')
    let mealDiv = document.createElement('div')
    let mealTitle = document.createElement('h1')
    let mealLink = document.createElement('h5')
    let mealTime = document.createElement('h3')
    let mealServe = document.createElement('h4')
    let mealContent = document.createElement('div')
    let mealImage = document.createElement('img')
    let mealButton = document.createElement('button')
    mealImage.src = `https://spoonacular.com/recipeImages/${meal.id}-312x231.jpg`
    

    mealContent.className = 'content'

    // add className to foodDiv
    mealDiv.className = "meal-entry"
    mealLink.className = "meal-link"
    mealImage.className = "meal-image"
    mealButton.className = "meal-button"
    // inset food data into element

    mealTitle.innerText = meal.title
    mealTime.innerText = `Cooking Time: ${meal.readyInMinutes}min`
    mealServe.innerText = `Serving Size: ${meal.servings}`
    mealButton.innerText = `Get Recipe`
    mealButton,addEventListener('click', ()=> {
        window.open(  `${meal.sourceUrl}`).scrollIntoView('#results')
    });

    // insert inner elelment into vidConent
    mealContent.append(mealImage)
    mealContent.append(mealTitle)
    mealContent.append(mealTime)
    mealContent.append(mealServe)
    mealContent.append(mealLink)
    mealContent.append(mealButton)



  
    //insert the foodTitle in to the mealdiv
    
    mealDiv.append(mealContent)



    // inset foodDiv into resultsDiv


    resultsDiv.append(mealDiv)
    
}

