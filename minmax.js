
let max_form = document.getElementById("getmax");
max_form.addEventListener("submit", function(event){
    let num1 = document.getElementById("num1").value,
        num2 = document.getElementById("num2").value,
        largenum = 0,
        smallnum = 0;
    num1 = (+num1 === 0) ? 0 : +num1 || false;
    num2 = (+num2 === 0) ? 0 : +num2 || false;
    event.preventDefault();
    if ((num1 !== false) || (num2 === false)) {
        largenum = Math.max(num1, num2);
        smallnum = Math.min(num1, num2);
        let result = document.getElementById("result");
        if (largenum === smallnum) {
            // alert("Those two numbers are equal!");
            result.innerHTML = "<h3>Those two numbers are equal!</h3>";
        }
        else {
            // alert (largenum + " is larger than " + smallnum);
            result.innerHTML = `<h3> ${largenum} is larger than ${smallnum} </h3>`;
        }
    }
        else {
            // alert("Please enter only numeric values.");
            result.innerHTML = "<h3>Please enter only numeric values.</h3>";
        }
    
}, false)


let get_power = document.getElementById("getpower");
get_power.addEventListener("submit", function(event){
    let n1 = document.getElementById("n1").value,
        n2 = document.getElementById("n2").value,
        power = 0;
    let output = document.getElementById("output");
    event.preventDefault();
    if ((!isNaN(n1)) && (!isNaN(n2))) {
        power = Math.pow(n1, n2);
        output.innerHTML = "<h3>" + n1 + " to the power of " + n2 + " is: " + power + "</h3>";
    }
    else {
        // alert("Please enter only numeric values.");
        output.innerHTML = "<h3>Please enter only numeric values.</h3>";
    }

})