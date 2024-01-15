"use strict"

let numberOfSeries

function startApp() {
    do {
        numberOfSeries = +prompt("Necha marta serial korgansiz?")
    } while (numberOfSeries === 0)
}

startApp()

const seriesDB = {
    count: numberOfSeries,
    genres: [],
    series: {},
}

function seriesFunc() {
    let serialTitle, serialMark;
    let i = 0
    do {
        serialTitle = prompt("Serial title?")
        serialMark = prompt("Serial mark?")
        if (serialTitle !== "" && serialTitle !== null && serialMark !== "" && serialMark !== null) {
            seriesDB.series[serialTitle] = serialMark
            i++
        } else {
            i = 0
        }
    } while (i < 2)
}

seriesFunc()

function countFunc() {
    if (seriesDB.count >= 10) {
        console.log("Max viewer")
    } else if (5 <= seriesDB.count && seriesDB.count < 10) {
        console.log("Normal viewer")
    } else {
        console.log("Min viewer")
    }
}

countFunc()
console.log(seriesDB)