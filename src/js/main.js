

let elBox = document.getElementById("box")
let elInput1 = document.getElementById("input1")
let elInput2 = document.getElementById("input2")
let elInput3 = document.getElementById("input3")
let elInput4 = document.getElementById("input4")
let elInput5 = document.getElementById("input5")
let elInput6 = document.getElementById("input6")
let elInput7 = document.getElementById("input7")

elInput1.addEventListener("input", function() {
    elBox.style.color = elInput1.value 
})

elInput2.addEventListener("input", function() {
    elBox.style.fontSize = elInput2.value 
})

elInput3.addEventListener("input", function() {
    elBox.style.backgroundColor = elInput3.value 
})

elInput4.addEventListener("input", function() {
    elBox.style.borderRadius = elInput4.value 
})

elInput5.addEventListener("input", function() {
    elBox.style.padding = elInput5.value 
})

