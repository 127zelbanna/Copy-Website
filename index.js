function apscp() {
    window.open("https://apcentral.collegeboard.org/courses/ap-computer-science-principles", "_blank");
}
function apsca() {
    window.open("https://apcentral.collegeboard.org/courses/ap-computer-science-a","_blank");
}

let counter = 0;
const images = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"];


function leftClick() {
        counter--;
        carousel();
}
function rightClick() {
        counter++;
        carousel();
}

function carousel() {
    if (counter > images.length - 1) {
        counter = 0;
    }
    if (counter < 0) {
        counter = 2;
    }
    document.getElementById("carImage").src = images[counter];
}

function closeOpen() {
    if (document.getElementById("sideBar").style.display === "block") {
        document.getElementById("sideBar").style.display = "none";
        document.getElementById("everything").style.display = "block";
        document.getElementById("hamButton").style.backgroundColor = "#1c4587";
        document.getElementById("hamButton").style.opacity = "0.3";
        document.getElementById("hamButton").style.color = "white";
    } else {
        document.getElementById("sideBar").style.display = "block";
        document.getElementById("everything").style.display = "grid";
        document.getElementById("hamButton").style.backgroundColor = "gold";
        document.getElementById("hamButton").style.opacity = "1";
        document.getElementById("hamButton").style.color = "black";
    }
}
function courses() {
    if (document.getElementById("coursesSide").style.display === "block") {
        document.getElementById("coursesSide").style.display = "none";
    } else {
        document.getElementById("coursesSide").style.display = "block";
        document.getElementById("extraSides").style.display = "none";
    }
}
function extras() {
    if (document.getElementById("extraSides").style.display === "block") {
        document.getElementById("extraSides").style.display = "none";
    } else {
        document.getElementById("extraSides").style.display = "block";
        document.getElementById("coursesSide").style.display = "none";
    }
}