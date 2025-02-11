document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const input = document.getElementById("input");

    const messages = [
        "Initializing system...",
        "Loading secret message...",
        "Welcome, mysterious user.",
        "Type 'open' to continue."
    ];

    let i = 0;
    function typeMessage() {
        if (i < messages.length) {
            output.innerHTML += messages[i] + "<br>";
            i++;
            setTimeout(typeMessage, 1000);
        }
    }
    typeMessage();

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if (input.value.toLowerCase() === "open") {
                window.location.href = "message.html";
            } else {
                output.innerHTML += "Invalid command. Try again.<br>";
            }
            input.value = "";
        }
    });
});