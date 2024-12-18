//Create dymanic recipe cards - done before API integration to test functionality with json file
const recipeDir = 'json/data.json';

getRecipeData();

async function getRecipeData() {
    const response = await fetch(recipeDir);
    const data = await response.json();

    //Get user input from localStorage
    const ingredients = JSON.parse(localStorage.getItem("ingredients"));
    const flavour = localStorage.getItem("flavour");
    const cuisine = localStorage.getItem("cuisine");

    //Filter the recipes based on user input
    const filteredRecipes = data.recipe.filter(item => {
        //Check if all ingredients are in the recipe
        const hasAllIngredients = ingredients.every(ingredient => item.ingredients.includes(ingredient));

        //Check if the recipe matches the selected flavour and cuisine
        const matchesFlavour = item.flavor === flavour;
        const matchesCuisine = item.cuisine === cuisine;

        return hasAllIngredients || matchesFlavour && matchesCuisine;
    });

    //Display the filtered recipes
    displayRecipe(filteredRecipes);
}

//Add cards to div
const displayRecipe = (recipes) => {
    const cards = document.querySelector("div.recipecards");
    cards.innerHTML = "";  //Clear previous results
    //Display message if no recipes found
    if (recipes.length === 0) {
        const noResults = document.createElement("p");
        noResults.textContent = "No recipes found for your selection.";
        cards.appendChild(noResults);
        return;
    }
    recipes.forEach((item) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let cuisine = document.createElement("h4");
        let ingredients = document.createElement("p");
        let flavor = document.createElement("p");
        let cooking = document.createElement("p");

        name.textContent = `${item.name}`;
        ingredients.textContent = `Ingredients: ${item.ingredients.join(", ")}`;
        cuisine.textContent = `${item.cuisine} cuisine`;
        flavor.textContent = `Flavour: ${item.flavor}`;
        cooking.textContent = `Cooking instructions: ${item.cooking}`;

        card.appendChild(name);
        card.appendChild(cuisine);
        card.appendChild(flavor);
        card.appendChild(ingredients);
        card.appendChild(cooking);

        cards.appendChild(card);
    });
}

