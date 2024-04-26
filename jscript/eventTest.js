document.querySelectorAll("button").forEach(abutton => {
    abutton.addEventListener("click", () => {
        alert(abutton.textContent);
    });
});