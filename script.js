const getCountData = document.querySelector(".getData")

const displayCount1 = document.querySelector(".count-1")
const displayCount2 = document.querySelector(".count-2")

const unitValueDisplay1 = document.querySelector(".unit-value-1")
const unitValueDisplay2 = document.querySelector(".unit-value-2")

const totalUnitValueDisplay1 = document.querySelector(".total-unit-value-1")
const totalUnitValueDisplay2 = document.querySelector(".total-unit-value-2")

const totalCountDisplay = document.querySelector(".total-count")

let unitValue1 = 350
let unitValue2 = 450

unitValueDisplay1.innerHTML = unitValue1
unitValueDisplay2.innerHTML = unitValue2

let count = 0
let count2 = 0

function btn1Increment() {
    count++
    console.log(count)

    getCount()
}

function btn2Increment() {
    count2++
    console.log(count2)

    getCount()
}

function btn1Decrement() {
    if(count <= 0) {
        count = 0
        getCount()
    } else {
        count--
        console.log(count)

        getCount()
    }
}

function btn2Decrement() {
    if(count2 <= 0) {
        count = 0
        getCount()
    } else {
        count2--
        console.log(count2)

        getCount()
    }
}

function getCount() {
    displayCount1.innerHTML = count
    displayCount2.innerHTML = count2

    let subtotal1 = count * unitValue1
    let subtotal2 = count2 * unitValue2

    totalUnitValueDisplay1.innerHTML = subtotal1
    totalUnitValueDisplay2.innerHTML = subtotal2

    let total = (count * unitValue1) + (count2 * unitValue2)
    totalCountDisplay.innerHTML = total
}