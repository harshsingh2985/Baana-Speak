var translateButton = document.querySelector("#translate-button");

var txtInput=document.querySelector("#txt-input");

console.log(txtInput);


function buttonClickHandler() {
    console.log("button clicked");
    console.log("input",txtInput.value)

}
translateButton.addEventListener("click", buttonClickHandler);


