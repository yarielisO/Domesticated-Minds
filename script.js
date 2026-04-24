let currentPage = 1;
function nextPage() {
    document.getElementById("page" + currentPage).classList.remove("active");
    currentPage++;
    let next = document.getElementById("page" + currentPage);
    if (next) {
        next.classList.add("active");
    }
    if (currentPage === 2) {
        document.querySelector(".hidden").classList.add("show");
    }
    if (currentPage === 3) {
        let unique = document.querySelector(".unique");
        setTimeout(() => {
            unique.style.background = "#ccc";
            unique.style.transform = "scale(0.9)";
        }, 1000);
    }
    if (currentPage === 4) {
        document.querySelector("button").innerText = "OBEY";
        document.body.style.background = "black";
    }
}
let score = 50;
function increaseScore() {
    score += 10;
    document.getElementById("score").innerText = "Score: " + score + "%";
    if (score >= 100) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
}
function breakSystem() {
    document.body.style.background = "black";
    setTimeout(() => {
        document.body.innerHTML = '
            <h1 style='color:white; background:black; height:100vh; display:flex; align-items:center; justify-content:center;'>
            You were not meant to be uniform.
            </h1>
            ';
    }, 800);
}
