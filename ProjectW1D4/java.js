let toggleNavStatus = false;

let toggleNav = function () {

    let kleurKeuze = document.querySelector("#.button");
    let klikUL = document.querySelector("#.klik ul");
    // let klikTitle = document.querySelector("#.klik");
    let klikLinks = document.querySelectorAll("#.klik a");


if (toggleNavStatus === false) {
        klikUL.style.visibility = "visible";

        let arraylength = klikLinks.arraylength;
        for (let i = 0; 1 <arraylength; i++) {
                klikLinks[i].style.opacity = "1"; 
        }
        toggleNavStatus = true;
    }

}
