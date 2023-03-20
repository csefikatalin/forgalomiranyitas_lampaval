window.addEventListener("load", init);
let allapot = false;
let leptet = 0;
function init() {
    console.log("auto");
    let auto = ' <div class="auto"><img src="kepek/auto3.png" /></div>';

    document.querySelector(".forgalom").innerHTML += auto;
    let autoElem = document.querySelectorAll(".auto")[0];
    //
    let lampa = document.querySelector(".lampa");
    let lampaSzin = document.querySelectorAll(".lampa div");
    let piros = document.querySelector(".piros");
    let sarga = document.querySelector(".sarga");
    let zold = document.querySelector(".zold");
    sarga.style.opacity = "20%";
    zold.style.opacity = "20%";

    setInterval(() => {
        if (!allapot) {
            sarga.style.opacity = "100%";
        }
    }, 1000);

    setInterval(() => {
        let szel = parseInt(
            window.getComputedStyle(document.querySelector(".forgalom")).width
        );
        if (allapot) {
            piros.style.opacity = "100%";
            zold.style.opacity = "20%";
            console.log(piros.style.opacity);
        } else {
            piros.style.opacity = "20%";
            sarga.style.opacity = "20%";
            zold.style.opacity = "100%";
            autoElem.classList.add("balroljobbra");
            let poz = parseInt(window.getComputedStyle(autoElem).left);
            console.log(piros);
            if (poz > szel - 10) {
                document.location.reload();
            }
        }
        allapot = !allapot;
    }, 2000);
}
