function DrumSound(key) {
    this.soundType = getSoundType(key)
    this.play = function () {
        var audio = new Audio("sounds/" + this.soundType + ".mp3");
        audio.play();
    }
}

function handleClick(key) {
    alert(key + " got clicked");
}

function getSoundType(key) {
    switch (key) {
        case "w":
            return "tom-1";
        case "a":
            return "tom-2";
        case "s":
            return "tom-3";
        case "d":
            return "tom-4";
        case "j":
            return "snare";
        case "k":
            return "kick-bass";
        default:
            return "crash";
    }
}


function playSound(type) {
    var audio = new Audio("sounds/" + type + ".mp3");
    audio.play();
}

function setupEventListeners() {
    var btns = document.querySelectorAll("button");
    for (i = 0 ; i < btns.length ; i++) {
        var btn = btns[i]
        btn.addEventListener("click", function () {
            var key = this.innerHTML;
            var drumSound = new DrumSound(key);
            drumSound.play()
            // playSound(soundType);
        });
    }
    // alert("Event Listeners Setup!OO");
}

setupEventListeners();