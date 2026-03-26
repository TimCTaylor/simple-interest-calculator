// compute the interest and display the result. Linked to onClick event of the Compute Interest button in index.html
function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let amount = parseInt(principal) + parseFloat(interest);
    let result = document.getElementById("result");
    let year = new Date().getFullYear() + parseInt(years);  


    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }   else {  
        result.innerHTML = `If you deposit $<mark>${principal}</mark>,<br>
        at an interest rate of <mark>${rate}</mark>%.<br>
        You will receive an amount of <mark>$${amount}</mark>,<br>
        in the year <mark>${year}</mark>`;
    }
    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval; // update the rate value span, which is a child of the rate <input> element 
}
        