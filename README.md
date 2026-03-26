# IBM Developer Skills course

## Introduction to JavaScript, HTML, and CSS

Part of **Full Stack Developer Professional Certification**

Module 4  Project: Simple Interest Calculator

Repo: e-plantShopping  https://github.com/TimCTaylor/simple-interest-calculator 

Live site: (https://timctaylor.github.io/simple-interest-calculator/)

This is a simple project to show a few basic html, css, and javascript patterns.

A few highlights:

I use a range slider (input element of type range). The \<input> element has a child \<span>, which
I use to display the slider value as text. I connect the onchange() handler to a function that
update the span with the value of the input.

I also use a \<span> with id="result" to hold the result of the interest calculation. For this I wrote a compute() function,
assigned it to the onClick of a compute interest button. This does three things.
1. Uses document.getElementById to get the values of the various inputs.
2. Performs some simple calculation. 
3. Will return the result by writing to the innerHTML of the "result" \<span>.
