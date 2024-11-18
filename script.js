let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const themeToggleButton = document.getElementById("theme-toggle");

    if (isDarkMode) {
        body.classList.add("dark-mode");
        themeToggleButton.innerText = "Switch to Light Mode";
    } else {
        body.classList.remove("dark-mode");
        themeToggleButton.innerText = "Switch to Dark Mode";
    }
}

function cleanText() {
    var inputText = document.getElementById("text_input").value;
    var cleanedText = removeExtraSpaces(inputText);
    var cleanedTextContainer = document.getElementById("cleaned_text_container");
    cleanedTextContainer.innerHTML = "<h2>Cleaned Text:</h2><p>" + cleanedText + "</p>";
    cleanedTextContainer.style.display = "block";
    
    // Show copy and download buttons
    document.getElementById("copy_button").style.display = "block";
    document.getElementById("download_button").style.display = "block";

    // Analyze text
    analyzeText(inputText, cleanedText);
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

function analyzeText(originalText, cleanedText) {
    var originalWordCount = originalText.trim().split(/\s+/).length;
    var cleanedWordCount = cleanedText.trim().split(/\s+/).length;
    var originalCharCount = originalText.length;
    var cleanedCharCount = cleanedText.length;

    document.getElementById("word_count").innerText = "Original Word Count: " + originalWordCount + ", Cleaned Word Count: " + cleanedWordCount;
    document.getElementById("char_count").innerText = "Original Character Count: " + originalCharCount + ", Cleaned Character Count: " + cleanedCharCount;

    document.getElementById("analysis_container").style.display = "block";
}

function loadFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("text_input").value = e.target.result;
    };
    reader.readAsText(file);
}

function downloadText() {
    var cleanedText = document.querySelector("#cleaned_text_container p").textContent;
    var blob = new Blob([cleanedText], { type: "text/plain ;charset=utf-8" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cleaned_text.txt";
    link.click();
}
