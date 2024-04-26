var element = document.getElementById("circle");
var flag = false;

element.addEventListener("click", (event) => {
    if (flag) {
        flag = false;
    } else {
        flag = true;
    }
});

document.addEventListener("mousemove", (event) => {
    const elementRect = element.getBoundingClientRect();

    const offsetX = event.clientX - elementRect.width/2;
    const offsetY = event.clientY - elementRect.height/2;

    console.log([
        event.clientX,
        event.clientY,
        elementRect.width,
        elementRect.height,
        offsetX,
        offsetY
    ]);

    if (flag) {
        element.style.left = `${offsetX}`;
        element.style.top = `${offsetY}`;
    }
});
