let randomNumberArray = [];
generateNbrs();


document.getElementById("btn-play").addEventListener("click", generateNbrs )

function generateNbrs(){
    while(randomNumberArray.length < 5 ) {
        let randomNumber = Math.floor(Math.random() * 100 ) +1;

        if(randomNumberArray.indexOf(randomNumber)=== -1)randomNumberArray.push(randomNumber);
        

    }
    document.getElementById("d-numbers").innerHTML = randomNumberArray;

}