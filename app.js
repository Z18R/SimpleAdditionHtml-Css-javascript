let add = document.getElementById("add");
let allitems = document.getElementById("allitems");


function addition(){
    let a = document.getElementById('add1').value;
    let b = document.getElementById('add2').value;
    let c = document.getElementById('add3').value;
    let d = document.getElementById('add4').value;

    let total = parseInt(a)  + parseInt(b) + parseInt(c) + parseInt(d); 
    allitems.innerHTML = total;
    
}