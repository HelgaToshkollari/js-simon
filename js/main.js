const playBtn = document.getElementById("btn-play");
const displayNbrs = document.getElementById("d-numbers");
let displayTimer = document.getElementById("d-timer");
let timer = 30;


generateNbrs();



playBtn.addEventListener("click", () => {
    generateNbrs();
    timerCountdown();
   
   

} );

document.getElementById("d-numbers").innerHTML = "";

function generateNbrs(){
    let randomNumberArray = [];
    
    while(randomNumberArray.length < 5){

        randomNumber = Math.floor(Math.random() * 100) + 1;
        
        if(!randomNumberArray.includes(randomNumber)){

            randomNumberArray.push(randomNumber);
            console.log(randomNumberArray);
            

        } 

        document.getElementById("d-numbers").innerHTML = `<span> ${randomNumberArray} </span>`;
    }
   
}

/*document.getElementById("d-numbers").innerHTML = "";

function generateNbrs(){
    
    while(randomNumberArray.length < 5 ) {

        let randomNumber = Math.floor(Math.random() * 100 ) +1;

        if(randomNumberArray.indexOf(randomNumber)=== -1)randomNumberArray.push(randomNumber); 
        console.log(randomNumber);
        

    } 
 
    document.getElementById("d-numbers").innerHTML = randomNumberArray;
   

}*/

// 30 secondi di tempo
function timerCountdown(){

    let timerInt = setInterval(function(){

        if(timer > 0){

            for (let i = 30; i > 0 ; i--) {
            
                displayTimer.innerHTML = `${timer}`;
                timer--;
                return;
            }

        }else{
            displayTimer.innerHTML = `Time's up!`
            document.getElementById("d-numbers").innerHTML = "";
        }

    }, 1000)

    setTimeout(function(){
        clearInterval(timerInt); 
    }, 32000);

}