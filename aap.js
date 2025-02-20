
// var heading=document.querySelector("#head");


// function table(){

//     for(var i=1; i<=10; i++){
       
//         console.log(`${heading.value} x ${i} = ${heading.value*i}`);
    
//     }

// }






var input = document.querySelector("#input");

var output = document.querySelector("#output")

function table(){

    tableError.innerHTML = "";

    output.innerHTML = "<h1>Your Written Table Here!</h1>"

    for(var i=1; i<=10; i++){ 

        output.innerHTML += `${input.value} x ${i} = ${input.value * i}<br/>`
    
    }

}

