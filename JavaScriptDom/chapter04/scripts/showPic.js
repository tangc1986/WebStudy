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

window.onload = countBodyChildren;
