
let num1= document.getElementById("num12");
let but1= document.getElementById("but12");

let cho= document.getElementById("fname");
let win= document.getElementById("num11");
let trydis= document.getElementById("ent2");
let tryco=0;
but1.onclick= function(){
    if(cho.value>1 && cho.value<31){
        let random= Math.floor(Math.random()*30 + 1);
        num1.textContent = random;
        tryco++;
        trydis.textContent= `Tries: ${tryco}`;
        if(random==Number(cho.value)){
            win.textContent="YOU WIN!!🏆🤩";
            tryco=0;
        }
        else{
            win.textContent="YOU LOSE!😕";
        }
    }
else{
window.alert("The Number Should be in between 1 - 30");
}
    
    
}


