// display the date 
todayDate = new Date(); 
today = todayDate.toLocaleDateString()
document.querySelector("#date").textContent = today;
//change picture
let image = document.getElementById("myImage");

image.addEventListener("click", function () {
    // Get the message element
    let messageElement = document.querySelector("#message");

    // Check the current state of the image and act accordingly
    if (image.getAttribute("src") === "images/pred1.png") {
        // Change to the open cookie image
        image.src = "images/pred2.png";

        // display the text for prediction

    let predictions = [
        "If you take the initiative, success will not keep you waiting.",
        "Get ready for a romantic adventure.",
        "Time and patience, many surprises are waiting for you!",
        "A pleasant surprise awaits you.",
        "There is a piece of heaven on earth for you.",
        "Favorite song on the radio is a harbinger of good luck.",
        "Expect a letter this week.",
        "You will get rid of one bad habit and acquire two new ones.",
        "A lot of adventures and interesting trips await you.",
        "Go to work, otherwise your desires will not come true.",
        "You will find a treasure in the garden, and go on your dream vacation.",
        "You will have everything - money, a car, career growth.",
        "А lot of household chores are waiting for you.",
        "Beware of diseases, do sports more often.",
        "New luck awaits you - there will be an addition to the family.",
        "You will receive a lot of inspiration to make all your dreams come true.",
        "You will have an unexpected and pleasant meeting very soon.",
        "A lot of delicious ice cream, sweets, cakes, pastries are waiting for you.",
        "Very soon new cool friends will appear in your life.",
        "Very soon you will have a trip to the cinema and delicious popcorn.",
        "Your hopes and plans will come true beyond all expectations.",
        "Time will dry all tears and heal all wounds.",
        "This month you will meet your love.",
        "You will find something valuable that you lost long ago.",
        "You will achieve great success in your career.",
        "A new hobby will bring you joy and satisfaction.", 
        "You will make a new friend who will change your life for the better.",
        "You will discover a hidden talent that will surprise everyone around you.",
        "A spontaneous trip will lead to unforgettable experiences.",
        "You will receive unexpected recognition for your hard work.",
        "A small act of kindness will come back to you in a big way.",
        "You will find clarity in a situation that has been confusing you.",
        "A new opportunity that aligns with your passions will present itself.",
        "You will reconnect with someone from your past who brings positivity into your life.",
        "Your creativity will flourish, leading to exciting new projects.",
        "You will find balance and harmony in your daily routine."
    ];
    let randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
        messageElement.textContent = randomPrediction;
    } else {
        // Change to the closed cookie image
        image.src = "images/pred1.png";

        // Clear the prediction message
        messageElement.textContent = "";
    }
});