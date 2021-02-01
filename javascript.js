function changeBackgroundColor() {
    var color = document.getElementById("colorInput").value;
    console.log(color);

    var bodyElement = document.getElementById("bodyElement");
    bodyElement.style.backgroundColor = color;
}