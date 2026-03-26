function compute()
{
    p = document.getElementById("principal").value;
    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval; // update the rate value span, which is a child of the rate <input> element 
}
        