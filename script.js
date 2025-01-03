let get1 = document.getElementById("add");
let get2 = document.getElementById("sub");
let get3 = document.getElementById("mul");
let get4 = document.getElementById("dev");

let getbutton = document.getElementById("reset");

function calculate(operation){
    let in1 = document.getElementById("input1").value; 
    let in2 = document.getElementById("input2").value; 
    let para = document.getElementById("pa");

    if(isNaN(in1) || isNaN(in2) || in1 === '' || in2 === ''){
        para.textContent = "Please enter valid numbers!";
        return;
    }

    in1 = Number(in1); 
    in2 = Number(in2); 

    let sum;
    if(operation === 'add') sum = in1 + in2;
    else if(operation === 'subtraction') sum = in1 - in2;
    else if(operation === 'multiply') sum = in1 * in2;
    else if(operation === 'divide'){
        if(in2 === 0){
            para.textContent = "Can't divide by zero!";
            return;
        }
        sum = in1 / in2; 
    }

    console.log(sum);
    para.textContent = `Your answer is: ${sum}`;
    
    let a = document.getElementById("frist");
    a.style.display = "none";
    let b = document.getElementById("second");
    b.style.display = "block";
}

get1.addEventListener("click", () => calculate('add'));
get2.addEventListener("click", () => calculate('subtraction'));
get3.addEventListener("click", () => calculate('multiply'));
get4.addEventListener("click", () => calculate('divide'));

getbutton.addEventListener("click", () => {
    window.location.reload(); 
});
