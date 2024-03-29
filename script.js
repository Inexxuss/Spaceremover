function cleanText() {
    var inputText = document.getElementById("text_input").value;
    var cleanedText = removeExtraSpaces(inputText);
    var cleanedTextContainer = document.getElementById("cleaned_text_container");
    cleanedTextContainer.innerHTML = "<h2>Cleaned Text:</h2><p>" + cleanedText + "</p>";
    cleanedTextContainer.style.display = "block";
    document.getElementById("copy_button").style.display = "block";
}

function removeExtraSpaces(text) {
    return text.split(/\s+/).join(" ");
}

function copyText() {
    var cleanedText = document.querySelector("#cleaned_text_container p").textContent;
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", cleanedText);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Cleaned text copied to clipboard!");
}
