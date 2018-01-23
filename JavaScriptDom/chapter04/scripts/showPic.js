function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    var text = document.getElementById("description").childNodes[0].nodeValue;
    // alert(text);
    // alert(body_element.childNodes.length);
    // alert(body_element.nodeType);
}

window.onload = prepareLinks;

function prepareLinks() {
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(winURL) {
    window.open(winURL, "popup", "width=320, height=480");
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName('a');
}