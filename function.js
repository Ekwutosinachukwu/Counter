

let peopleInput = document.getElementById("people-input")
let count = 0
//console.log(count)



function addition() {
    count += 1
    peopleInput.innerText = count
}

function save() {
    let reportSaver = document.getElementById("report-save")
    peopleInput.innerText = count
    let countStr = count + " - "
    reportSaver.textContent += countStr

}


function reset() {
    let reset = document.getElementById("reset")
    peopleInput.innerText = 0

}


{}