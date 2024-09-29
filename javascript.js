function calc(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    output = num1 + num2;

    document.getElementById("output").value = output;
}