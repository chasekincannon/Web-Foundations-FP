$.ajax("https://api.adviceslip.com/advice",
    {
        success: function (APIResponse) {
            let myAdvice = JSON.parse(APIResponse);
            let adviceTag = document.createElement("p");
            adviceTag.innerHTML = myAdvice.slip.advice;
            let myDiv = document.getElementById("myAdvice");
            myDiv.appendChild(adviceTag);
        }
    });

function changeText() {
    let elem = document.getElementById("title");
    elem.style.fontSize = "24px";
}
function revertText() {
    let elem = document.getElementById("title");
    elem.style.fontSize = "18px";
}