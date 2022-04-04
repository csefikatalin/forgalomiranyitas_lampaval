window.addEventListener("load", init);
var allapot = false;
var leptet = 0;
function init() {
    console.log("auto");
    var auto = ' <div class="auto"><img src="kepek/auto3.png" /></div>';

    document.querySelector(".forgalom").innerHTML += auto;
    var autoElem = document.querySelectorAll(".auto")[0];
    //
    var lampa = document.querySelector(".lampa");
    var lampaSzin = document.querySelectorAll(".lampa div");
    var piros = document.querySelector(".piros");
    var sarga = document.querySelector(".sarga");
    var zold = document.querySelector(".zold");
    sarga.style.opacity = "20%";
    zold.style.opacity = "20%";

    setInterval(() => {
        if (!allapot) {
            sarga.style.opacity = "100%";
        }
    }, 1000);

    setInterval(() => {
        var szel = parseInt(
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
            var poz = parseInt(window.getComputedStyle(autoElem).left);
            console.log(piros);
            if (poz > szel - 10) {
                document.location.reload();
            }
        }
        allapot = !allapot;
    }, 2000);
}
