const playBtn = document.getElementById("btn-play")
let randomNumberArray = [];
generateNbrs();


playBtn.addEventListener("click", generateNbrs);
document.getElementById("d-numbers").innerHTML = "";

function generateNbrs(){
    while(randomNumberArray.length < 5 ) {
        let randomNumber = Math.floor(Math.random() * 100 ) +1;

        if(randomNumberArray.indexOf(randomNumber)=== -1)randomNumberArray.push(randomNumber);
        

    }
    
    document.getElementById("d-numbers").innerHTML = randomNumberArray;

}