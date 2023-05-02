document.getElementById("submit").onclick = function () {
    let name = document.getElementById("name").value;

    if (name.length > 0) {
        document.getElementById("Ok").style.display = "block";
        document.getElementById("Virhe").style.display = "none";
    }
    else {
        document.getElementById("Virhe").style.display = "block";
        document.getElementById("Ok").style.display = "none";
    }

    return false;
}
