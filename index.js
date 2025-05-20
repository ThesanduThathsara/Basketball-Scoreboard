let homeDivCount=document.querySelector("#home-div>p");
let guestDivCount=document.querySelector("#guest-div>p");

homeDivCount.textContent=0;
guestDivCount.textContent=0;

function homeAdd1(){
    homeDivCount.textContent=Number(homeDivCount.textContent)+1
    color();
}
function homeAdd2(){
    homeDivCount.textContent=Number(homeDivCount.textContent)+2
    color();
}
function homeAdd3(){
    homeDivCount.textContent=Number(homeDivCount.textContent)+3
    color();
}
                
function guestAdd1(){
    guestDivCount.textContent=Number( guestDivCount.textContent)+1
    color();
}
function guestAdd2(){
     guestDivCount.textContent=Number( guestDivCount.textContent)+2
     color(); 
}
function guestAdd3(){
    guestDivCount.textContent=Number( guestDivCount.textContent)+3
    color();
}

function color(){
    if(Number(homeDivCount.textContent)>Number(guestDivCount.textContent)){
        homeDivCount.style.background="white";
        guestDivCount.style.background="black";
        
    }else if(Number(homeDivCount.textContent)<Number(guestDivCount.textContent)){
        guestDivCount.style.background="white";
        homeDivCount.style.background="black";
    }else{
        guestDivCount.style.background="black";
        homeDivCount.style.background="black";
    }
}

function reset(){
    homeDivCount.textContent=0;
    guestDivCount.textContent=0;
    guestDivCount.style.background="black";
    homeDivCount.style.background="black";
}



