let num1 = document.getElementById("num12");
let but1 = document.getElementById("but12");
let bgSound = document.getElementById("bgSound");
let cho = document.getElementById("fname");
let win = document.getElementById("num11");
let trydis = document.getElementById("ent2");
let winSound = document.getElementById("winSound");
let tryco = 0;

let overlay = document.getElementById("overlay");
let playBtn = document.getElementById("playBtn");
let mainContent = document.getElementById("mainContent");

playBtn.onclick = () => {
    overlay.classList.add("fade-out");
    mainContent.classList.remove("blurred");
    mainContent.classList.add("clear");

    bgSound.volume = 1;
    bgSound.play();

    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
};
but1.onclick = function () {
    let choice = Number(cho.value);
    
    if (choice >= 1 && choice <= 30) {
        let random = Math.floor(Math.random() * 30 + 1);
        num1.textContent = random;
        tryco++;
        trydis.textContent = `Tries: ${tryco}`;

        if (random === choice) {
            winSound.play();
            win.textContent = "YOU WIN!!🏆🤩";
            tryco = 0;
            cho.value = '';
        } else {
            win.textContent = "BAD LUCK IT SEEMS😗...RETRY?👇🏻";
        }
    } else {
        alert("The Number Should be in between 1 - 30");
    }
};


