function handleClick(key) {
    alert(key + " got clicked");
}

function setupEventListeners() {
    var btns = document.querySelectorAll("button");
    for (i = 0 ; i < btns.length ; i++) {
        var btn = btns[i]
        var key = btn.innerHTML;
        var message = key.toUpperCase() + " got clicked";
        // btn.addEventListener("click", handleClick);
        btn.addEventListener("click", function () {
            alert(message);
        });
    }
    // alert("Event Listeners Setup!OO");
}

setupEventListeners();