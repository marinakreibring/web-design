//display the picture of different signs

const showSign = () => {
    
    let signValue = document.querySelector('#birthdate').value;
    const pictureName = "images/"+signValue+".jpg";
    document.querySelector("#zodiac").setAttribute("src", pictureName);
}

document.querySelector('#buttonDate').addEventListener('click', showSign);

