const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");

function convert() {
    let temp;
    if (toC.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    } else if (toF.checked) {
        temp = Number(textbox.value);
        temp = temp * (9 / 5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else {
        result.textContent = "Select a Unit";
    }
}