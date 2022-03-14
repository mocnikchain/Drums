// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("i got clicked!")
// }

// KLIK Z MIŠKO
// enako --> anonymous function se temu reče
//najprej zagrabimo vse elemente ki imajo class drum, nato loopamo čez vse in hkrati 
//dodajamo event listenerje vsakemu na seznamu... potem pa ko kliknemo enga bo od tega
//gumba eventlistener triggera funkcijo ki smo jo definirali --> npr console.log(this.innerHTML)
for (var i=0; i<(document.querySelectorAll(".drum").length); i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        // document.querySelector("."+this.innerHTML+"").style.backgroundImage='none'; //ta tud dela za brisanje bobnov ozadje
        // this.style.color = 'white' ...barve
    });
} 
// TIPKOVNICA
//document spredi --> pri keywordih CEL PAGE ZAČNE POSLUŠAT ZA KEYBOARD STROKES ker nimamo definiranega gumba na page-u.
document.addEventListener("keydown", function(event) {
    //it lets us tap us into the event that triggers eventListener...EVENT !
    // console.log(event)
    makeSound(event.key); //that event contains a property key --> ki nam pove tipko ki smo jo prtisnl
    //event.key je torej lahko kira koli tipka w d f g h...itd
    buttonAnimation(event.key)
});

// var audio = new Audio("sounds/tom-1.mp3")
// audio.play();

function makeSound(key){
    switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")     
        tom1.play();  
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3")     
        tom2.play();  
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3")     
        tom3.play();  
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3")     
        tom4.play();  
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3")     
        snare.play();  
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3")     
        crash.play();  
        break;

    case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3")     
        kickBass.play();  
    break;

    default: console.log(buttonInnerHTML)
} }

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    // activeButton.classList="pressed";
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}