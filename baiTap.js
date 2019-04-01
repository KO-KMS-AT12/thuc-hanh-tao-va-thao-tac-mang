var arr = [];

function addArr() {
    let x = 0;
    arr[x] = document.getElementById("txt_value").value;
    alert("Element: " + arr[x] + " Added at index " + x);
    x++;
    document.getElementById("txt_value").value = "";
}

function displayAdd() {
    let e = "<hr/>";
    for (let i = 0; i < arr.length; i++) {
        e += " Arr[" + i + "]" + " = " + arr[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}