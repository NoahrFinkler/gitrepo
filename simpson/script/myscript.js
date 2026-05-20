var figuren = ["apu", "barney", "bart", "charles", "glancy", "grandpa", "hibbert", "homer", "krusty", "marge"];
var imageMap = {
    apu: "apu_1.png", barney: "barney_2.png", bart: "bart_3.png", charles: "charles_4.png",
    glancy: "glancy_5.png", hibbert: "hibbert_6.png", grandpa: "grandpa_7.png",
    homer: "homer_8.png", krusty: "krusty_9.png", marge: "marge_10.png"
};

function changePics() {
    setupPlaces(false);
}

function changePicsUsingChildNodes() {
    setupPlaces(true);
}

function setupPlaces(useChildNodes) {
    var row1 = document.getElementById("rowone");
    var row2 = document.getElementById("rowtwo");
    if (!row1 || !row2) return;

    row1.style.backgroundColor = "orange";
    row2.style.backgroundColor = "blue";

    var places = [];
    if (useChildNodes) {
        for (var i = 0; i < row1.childNodes.length; i++) {
            if (row1.childNodes[i].classList && row1.childNodes[i].classList.contains("place")) {
                places.push(row1.childNodes[i]);
            }
        }
        for (var i = 0; i < row2.childNodes.length; i++) {
            if (row2.childNodes[i].classList && row2.childNodes[i].classList.contains("place")) {
                places.push(row2.childNodes[i]);
            }
        }
    } else {
        places = Array.from(document.getElementsByClassName("place"));
    }

    var idx = 0;
    for (var i = 0; i < places.length; i++) {
        if (!places[i].id) {
            places[i].classList.add("yellowbg");
            var img = places[i].querySelector("img");
            if (img && idx < figuren.length) {
                var name = figuren[idx];
                img.src = "bilder/" + imageMap[name];
                img.alt = name;
                img.title = name;
                img.style.cursor = "pointer";
                img.addEventListener("click", toggleImages);
                idx++;
            }
        }
    }

    for (var i = 0; i < figuren.length; i++) {
        var nameDiv = document.getElementById("name" + (i + 1));
        if (nameDiv) nameDiv.textContent = figuren[i];
    }
}

function toggleImages(event) {
    var imgs = document.querySelectorAll("#rowone img, #rowtwo img");
    var hidden = false;
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].style.display === "none") hidden = true;
    }
    for (var i = 0; i < imgs.length; i++) {
        if (hidden) {
            imgs[i].style.display = "";
        } else if (imgs[i] !== event.currentTarget) {
            imgs[i].style.display = "none";
        }
    }
}