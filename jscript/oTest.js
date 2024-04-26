const to1 = {
    id: 1,
    id_s: "10231"
};

function ToCreator (id, code, randomArray)  {
    this.id = id;
    this.code = code;
    this.value = 0;
    this.increaseValue = function () {
        this.value += 1;
    }
};

const to2 = new ToCreator(2, "2012", [1,2]);

to2.increaseValue();
to2.increaseValue();
to2.increaseValue();

var tmp = "";
document.addEventListener("keydown", (event) => {
    tmp += event.key;
    document.querySelector("#kInput").textContent = tmp;
});

document.addEventListener("mouseup", (event) => {
    console.log(event.x);
});