var btnTranslate = document.querySelector("#btn-translate");

var textArea= document.querySelector("#text-area")

var outputDiv = document.querySelector("#output");
 
//  var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var url ="https://api.funtranslations.com/translate/minion.json"



function getConstructURl(text)
{
    return url + "?" + "text="+ text;

}

function errorHandler(error)
{

    console.log("error", error);

}

btnTranslate.addEventListener("click", function clickHandler() {

    var inputText = textArea.value;

    fetch(getConstructURl(inputText))
    .then(response => response.json())
    .then(json => {
        console.log(json.contents.translated)
        var translatedText = json.contents.translated
        outputDiv.innerHTML = translatedText
    })
    .catch(errorHandler)

   
})



