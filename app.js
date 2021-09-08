var txtarea = document.querySelector("#txtarea");
var button = document.querySelector("#buttonArea");
var out = document.querySelector("#outarea")

button.addEventListener("click",function() {
    var url = "https://api.funtranslations.com/translate/minion.json" + "?text=" + txtarea.value;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            out.innerText = json.contents.translated;
        })
})

