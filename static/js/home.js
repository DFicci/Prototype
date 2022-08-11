$("#menuPopOut").click(function () {
    let popOut = document.getElementById("menuPopOut");

    if (popOut.value === "YES") {
        popOut.value = "NO";
        $("#sideBar").css("display", "none")
    } else if (popOut.value === "NO") {
        popOut.value = "YES";
        $("#sideBar").css("display", "block")
    }

})