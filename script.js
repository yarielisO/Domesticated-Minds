let currentPage = 1;
function nextPage() {
    document.getElementById("page" + currentPage).classList.remove("active");
    if(currentPage < 5){
        currentPage++;
        document.getElementById("page" + currentPage).classList.add("active");
    }
    if (currentPage === 2) {
        document.querySelector(".hidden").classList.add("show");
        flashMessage("flash1",3000);
        flashMessage("flash1",7000);
        setTimeout(()=>{
            document.getElementById("trait1").innerText="Silent";
            document.getElementById("trait2").innerText="Compliant";
            document.getElementById("trait3").innerText="Replaceable";
            document.getElementById("trait4").innerText="Programmable";
        },1000);
    }
    if (currentPage === 3) {
        let unique = document.querySelector(".unique");
        setTimeout(() => {
            unique.style.background = "#ccc";
            unique.style.transform = "scale(0.5)";
            unique.style.opacity = "0.4";
        }, 1000);
    }
    if (currentPage === 4) {
        document.body.style.background = "black";
        document.body.style.animation = "drift 2s linear infinite, fluorescent .8s infinite";
    }
}
let score = 50;
function increaseScore() {
    let beep= document.getElementById("beep");
    beep.currentTime = 0;
    beep.play();
    score += 10;
    document.getElementById("score").innerText = "Score: " + score + "%";
    const barWidth = Math.min(score, 100);
    document.querySelector(".bar").style.width = barWidth + "%";
    if (score >= 80 && !runnerTriggered){
        runnerTriggered = true;
        setTimeout(()=>{
            let giggle = document.getElementById("giggle");
            giggle.volume = 0.15;
            giggle.currentTime = 0;
            giggle.play();
        }, 300);
        setTimeout(()=>{
            document.getElementById("runner").classList.add("run");
        }, 900);
    }
    if (score >= 100) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
}
function breakSystem() {
    document.body.style.background = "black";
    setTimeout(() => {
        document.getElementById("page4").classList.remove("active");
            document.getElementById("page5").classList.add("active");
    },800);
}
function flashMessage(id,time){
    setTimeout(()=>{
        let flash=document.getElementById(id);
        
        flash.classList.add("flash");
        
        setTimeout(()=>{
            flash.classList.remove("flash");
        },80);
    },time);
}
let unlearnClicks = 0;
function unlearnReveal(){
    const message = document.getElementById("finalMessage");
    const secret = document.getElementById("secretLine");
    const btn = document.getElementById("unlearnBtn");
    unlearnClicks++;
    if(unlearnClicks === 1){
        btn.innerText = "OBEY";
        setTimeout(()=>{
            btn.innerText = "OBE_";
        },400);
        setTimeout(()=>{
            btn.innerText = "UNLEARN";
        },800);
        setTimeout(()=>{
            message.innerText = "Certainty is the first cage.";
            document.body.classList.add("awaken");
        },1400);
    }
    if(unlearnClicks >= 3){
        secret.style.opacity = "1";
    }
}
function startTest(){
    document.getElementById("startScreen").style.display = "none";
}
