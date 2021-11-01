const relevantKeys = ["w", "a", "s", "d", "j", "k", "l"];

function DrumSound(key) {
    this.soundType = getSoundType(key)
    this.play = function () {
        var audio = new Audio("sounds/" + this.soundType + ".mp3");
        audio.play();
    }
}

function isRelevantKey(key) {
    return relevantKeys.includes(key)
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

function handleKeydowns(key) {
    var keyToHandle = key.toLowerCase();
    if (isRelevantKey(keyToHandle)) {
        var drumSound = new DrumSound(keyToHandle);
        drumSound.play();
    }
}

function setupEventListeners() {
    // Page button events
    var btns = document.querySelectorAll("button");
    for (i = 0 ; i < btns.length ; i++) {
        var btn = btns[i]
        btn.addEventListener("click", function () {
            var key = this.innerHTML;
            var drumSound = new DrumSound(key);
            drumSound.play()
        });
    }

    // keyboard events
    document.addEventListener("keydown", function(event) {
        handleKeydowns(event.key);
        console.log(typeof(event.key));
    });
}

setupEventListeners();