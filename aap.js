console.log("Hello world!");


var input = document.querySelector("#input");
var output = document.querySelector("#output")


function table(){

    tableError.innerHTML = "";

    output.innerHTML = "<h2>Your Written Table Here!</h2>"

    if (input.value === "") {
        alert("Please Enter the Number!");
        console.error("Input field is empty");
        output.innerHTML = "";
    }
    else {
        for(var i = 1; i <= 10; i++) { 

            output.innerHTML += `${input.value} x ${i} = ${input.value * i} <br/>`
    
        }
    }

    input.value = "";

}
