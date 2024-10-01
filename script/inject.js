
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Kamu tidak memiliki izin -48intens dev team");
});

window.addEventListener('keydown', function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        alert("Kamu tidak memiliki izin -48intens dev team");
    }
});


