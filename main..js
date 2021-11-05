let count = 0
let resCounter = document.getElementById("count-people")
let resSave = document.getElementById("res-save")

function increment() {
    count += 1
    resCounter.innerHTML = `${count}`
}

function decrement() {
    count -= 1
    resCounter.innerHTML = `${count}`
}

function reset() {
    count = 0
    resCounter.innerHTML = `${count}`
}

function save() {
    countStr = count + " - "
    resSave.innerHTML += countStr
}


