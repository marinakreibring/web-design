document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Capture the user input
    const ingredient1 = document.getElementById("ingredient1").value;
    const ingredient2 = document.getElementById("ingredient2").value;
    const ingredient3 = document.getElementById("ingredient3").value;
    const flavour = document.getElementById("flavour").value;
    const cuisine = document.getElementById("cuisine").value;

    // Validate user input (check if all fields are filled)
    if (!ingredient1 || !ingredient2 || !ingredient3 || !flavour || !cuisine) {
        alert("Please fill out all fields.");
        return;
    }

    // Store the user input in localStorage to pass it to the next page
    localStorage.setItem("ingredients", JSON.stringify([ingredient1, ingredient2, ingredient3]));
    localStorage.setItem("flavour", flavour);
    localStorage.setItem("cuisine", cuisine);

    // Redirect to the output page
    window.location.href = "output.html";
});
