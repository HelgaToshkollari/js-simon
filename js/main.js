const playBtn = document.getElementById("btn-play");
const displayNbrs = document.getElementById("d-numbers");
let displayTimer = document.getElementById("d-timer");
let timer = 30;


generateNbrs();



playBtn.addEventListener("click", () => {
    const nbrsArray = generateNbrs(1, 100, 5 );
    console.log(nbrsArray);
    printNbrs(nbrsArray); 
    timerCountdown();
    
    setTimeout(function(){
        const userNbrs = askUserNbrs(nbrsArray);
        console.log(userNbrs);

    },32000)
   
   

} );



function generateNbrs(min, max, length){
    const randomNumberArray = [];
    
    while(randomNumberArray.length < length){

        const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
        
        if(!randomNumberArray.includes(randomNumber)){
            randomNumberArray.push(randomNumber);
        } 

       
    }

    return randomNumberArray; 
}

function printNbrs (displayNbrsArray) {
    displayNbrs.innerHTML = "";
    for (let i = 0 ; i < displayNbrsArray.length; i++){
        const number = displayNbrsArray[i];
        const numberEl = document.createElement("div");
        numberEl.innerHTML = `<div class="m-3 p-5 card bg-number text-white">${number}</div> `;
        displayNbrs.append(numberEl);
    }
}

// 30 secondi di tempo
function timerCountdown(){

    let timerInt = setInterval(function(){

        if(timer > 0){

            for (let i = 30; i > 0 ; i--) {
            
                displayTimer.innerHTML = `<div class="text-white">${timer}</div>`;
                timer--;
                return;
            }

        }else{
            displayTimer.innerHTML = `<div class="text-white">Time's up!</div>`;
            displayNbrs.innerHTML = "";
        }

    }, 1000)

    setTimeout(function(){
        clearInterval(timerInt); 
    }, 32000);

    

}

function askUserNbrs(nbrsArray){
    const userNbrsArray = [];
    const wrongNbrs = [];

    for (let i = 0; i < 5 ; i++ ) {
        const userNbrs = parseInt(prompt("Inserisci numero"));

        if (!userNbrsArray.includes(userNbrs) && nbrsArray.includes(userNbrs)){
            userNbrsArray.push(userNbrs);
        } else {
            wrongNbrs.push(userNbrs);
        }

    }
   
    
    return userNbrsArray;

}