/*
alert("hello");
var x = prompt("Type thing...");
alert(x.length);
alert(x.slice(x.length - 2, x.length).toUpperCase().toLowerCase());
*/

var outLabel = document.getElementById("lOut");

// outLabel.innerHTML = Math.PI ** Math.PI;

const pisqrtn = (n) => {
    return Math.PI * Math.PI + n;
};

const floor = () => {
    outLabel.innerHTML = Math.floor(outLabel.innerHTML);
}

function increment() {
    outLabel.innerHTML = pisqrtn(parseFloat(outLabel.innerHTML));
};

outLabel.innerHTML = pisqrtn(0);
