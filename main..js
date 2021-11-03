let count = 0
let res = document.getElementById("count-people")

function increment() {
    count += 1
    res.innerHTML = `${count}`
}

function decrement() {
    count -= 1
    res.innerHTML = `${count}`
}

function reset() {
    count = 0
    res.innerHTML = `${count}`
}

function save() {
    console.log(count)
}
