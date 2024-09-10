var calcDisplay = "";

function btnClick(e) {
    if (e == "1")
    if (e == "AC") {
        calcDisplay = "";
    }
    else {
        calcDisplay = calcDisplay + e;
        console.log(calcDisplay);
    }
    document.getElementById("display").value = calcDisplay;
}

document.getElementById("display").addEventListener('input', function displayChange() {
    console.log(this.value);
    let e = this.value;
    
});

