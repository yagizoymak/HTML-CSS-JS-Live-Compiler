
// iframe css settings
let outputbody = document.querySelector('#output').contentDocument.body.style;
outputbody.fontSize = "1.3rem";
outputbody.paddingLeft = "10px";


// live code compiler
function run() {
    //variables
    let htmlCode = document.querySelector('#html-area').value,
        cssCode = document.querySelector('#css-area').value,
        jsCode = document.querySelector('#js-area').value,
        output = document.querySelector('#output');

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}