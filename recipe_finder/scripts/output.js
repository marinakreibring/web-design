// create dynamic recipe cards
const recipeDir = 'json/data.json';

getRecipeData();

async function getRecipeData(){
    const response = await fetch(recipeDir);
    const data = await response.json();
    
    displayRecipe(data.recipe);
}
//add cards to div
const displayRecipe = (recipe) => {
    const cards = document.querySelector("div.recipecards");
    recipe.forEach((item) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let cuisine = document.createElement ("h3")
        let ingredient1 = document.createElement("p");
        let ingredient2 = document.createElement("p");
        let flavor = document.createElement("p");
        let cooking = document.createElement("p");

               
        name.textContent = `${item.name}`;
        ingredient1.textContent = `${item.ingredients[0]}`;
        ingredient2.textContent = `${item.ingredients[1]}`;
        cuisine.textContent = `${item.cuisine}`;
        flavor.textContent = `${item.flavor}`;
        cooking.textContent = `${item.cooking}`;
        
        card.appendChild(name);
        card.appendChild(cuisine);
        card.appendChild(ingredient1);
        card.appendChild(ingredient2);
        card.appendChild(flavor);
        card.appendChild(cooking);
        
        cards.appendChild(card);
    });
}

