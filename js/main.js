const selectEl = document.getElementById("select");
const registrationImage = document.getElementById("planet-img");
let formListenerOne = 0, formListenerTwo = 0;
let formOne = document.getElementById("formOne"), formTwo = document.getElementById("formTwo");

selectEl.addEventListener("change", function() {
    switch(true){
        case this.value === 'mercury' : registrationImage.src = "./img/Planet.svg";
        break;
        case this.value === 'uranus' : registrationImage.src = "./img/Uran.svg";
        break;
        case this.value === 'earth' : registrationImage.src = "./img/Planet(Earth).svg";
        break;
        case this.value === 'neptune' : registrationImage.src = "./img/Planet(Neptune).png";
        break;
        case this.value === 'mars' : registrationImage.src = "./img/Planet(Mars).png";
        break;
        case this.value === 'venus' : registrationImage.src = "./img/Planet(Venus).png";
        break;
        
    }
})

formOne.addEventListener("input", function(){ 
    if (!formOne.value){
        buttonGlow(formListenerOne = 0);
    } else {
        console.log('One');
        buttonGlow(formListenerOne = 1);
    }
})

formTwo.addEventListener("input", function(){
    if (!formTwo.value){
        buttonGlow(formListenerTwo = 0);
    } else {
        console.log('Two');
        buttonGlow(formListenerTwo = 1);
    }
})

function buttonGlow(){
    if (formListenerOne == 1 && formListenerTwo == 1){
        console.log('It works!')
        document.getElementById("formButton").removeAttribute("disabled");
        document.getElementById("formButton").style.backgroundColor = "#30C598";
    }
    if(formListenerOne == 0 || formListenerTwo == 0) {
        document.getElementById("formButton").setAttribute("disabled", "disabled");
        document.getElementById("formButton").style.backgroundColor = "#AEDBCE";
    }
}