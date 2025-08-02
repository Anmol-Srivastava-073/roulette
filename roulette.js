
let num1= document.getElementById("num12");
let but1= document.getElementById("but12");
let bgSound = document.getElementById("bgSound");
let cho= document.getElementById("fname");
let win= document.getElementById("num11");
let trydis= document.getElementById("ent2");
let winSound = document.getElementById("winSound");
let tryco=0;
let musicStarted = false;
cho.onclick= function(){
    if (!musicStarted) {
        bgSound.volume = 0.6;
        bgSound.play(); 
        musicStarted = true;
    }
}

but1.onclick= function(){
    if(cho.value>0 && cho.value<31){
        let random= Math.floor(Math.random()*30 + 1);
        num1.textContent = random;
        tryco++;
        trydis.textContent= `Tries: ${tryco}`;
        if(random==Number(cho.value)){
            winSound.play();
            win.textContent="YOU WIN!!🏆🤩";
            tryco=0;
            cho.value='';
        }
        else{
            win.textContent="YOU LOSE!😕";
        }
    }
else{
window.alert("The Number Should be in between 1 - 30");
}
    
    
}


