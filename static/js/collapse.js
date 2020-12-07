var collapsed = 0;

document.querySelector("#collapse").onclick = function() {
    if (collapsed == 0) {
        var elements = document.getElementById("charset-table").getElementsByTagName("tr");
        for (var i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.display = "none";
        }
        document.getElementById("collapse").style.display = "table-row";
        document.getElementById("status").innerHTML = "(hidden)";
        collapsed = 1;
    }
    else {
        var elements = document.getElementById("charset-table").getElementsByTagName("tr");
        for (var i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.display = "table-row";
        }
        document.getElementById("status").innerHTML = "(shown)";
        collapsed = 0;
    }
}