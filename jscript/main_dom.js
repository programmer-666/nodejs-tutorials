var lListItems = document.querySelectorAll("li");

document.querySelector("html").style.backgroundColor = "#011528";
document.querySelector("*").style.color = "#ffffff";

setInterval(() => {
    lListItems[0].style.color = "red";
    document.querySelector("#loremList #lix").style.color = "green";
}, 1000);


lListItems[2].classList.add("primary");
console.log(document.querySelector("#loremList #lix").attributes);