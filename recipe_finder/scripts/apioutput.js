//Add API key and url
const API_KEY = "1cea7a7916ca406d854cf4fc70295388";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch"; 

//Fetch recipes based on user input from localStorage
getRecipeData();

async function getRecipeData() {
    const ingredients = JSON.parse(localStorage.getItem("ingredients"));
    const flavour = localStorage.getItem("flavour");
    const cuisine = localStorage.getItem("cuisine");

    //Prepare the query parameters for the API request
    const ingredientsQuery = ingredients.join(','); 
    const flavourQuery = flavour; 
    const cuisineQuery = cuisine; 

    //Construct the API URL with query parameters
    const apiUrl = `${API_URL}?apiKey=${API_KEY}&includeIngredients=${ingredientsQuery}&cuisine=${cuisineQuery}&flavor=${flavourQuery}&number=10`;

    //Make the API call
    const response = await fetch(apiUrl);
    const data = await response.json();

    //Check if recipes are found
    if (data.results && data.results.length > 0) {
        displayRecipe(data.results);
    } else {
        displayNoResults();
    }
}

//Function to display recipe cards
const displayRecipe = (recipes) => {
    const cards = document.querySelector("div.recipecards");
    cards.innerHTML = "";  // Clear previous results

    recipes.forEach((item) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let cuisine = document.createElement("h4");
        let ingredients = document.createElement("p");
        let flavor = document.createElement("p");
        let cooking = document.createElement("p");

        name.textContent = `${item.title}`;
        ingredients.textContent = `Ingredients: ${item.ingredients.join(", ")}`;  // Assuming ingredients are in the API response
        cuisine.textContent = `${item.cuisine} cuisine`;
        flavor.textContent = `Flavour: ${item.flavor}`;
        cooking.textContent = `Cooking instructions: ${item.instructions}`;

        card.appendChild(name);
        card.appendChild(cuisine);
        card.appendChild(ingredients);
        card.appendChild(flavor);
        card.appendChild(cooking);

        cards.appendChild(card);
    });
}

//Display message if no recipes are found
const displayNoResults = () => {
    const cards = document.querySelector("div.recipecards");
    const noResults = document.createElement("p");
    noResults.textContent = "No recipes found for your selection.";
    cards.appendChild(noResults);
}
