
async function makeTextBigger() {
    document.getElementById('textBox').style.fontSize = "24pt";
    alert("Hello World!");
}

async function setTextFancy() {
    const text = document.getElementById("textBox");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline"; 
    alert("Fancify!");
}

async function setTextBoring() {
    const text = document.getElementById("textBox")
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
    alert("Boring text");
}

async function setTextMoo() {
    const text = document.getElementById("textBox");
    const textValue = text.value.toUpperCase();
    
    var splitText = textValue.split(". ");
    var addMoo = splitText.join("-Moo ");
    text.value= addMoo;
}