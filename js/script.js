"use strict"

let numberOfSeries

function startApp() {
    do {
        numberOfSeries = +prompt("Necha marta serial korgansiz?")
    } while (numberOfSeries === 0 || numberOfSeries === null || numberOfSeries === "" || isNaN(numberOfSeries))
}

startApp()

const seriesDB = {
    count: numberOfSeries,
    genres: [],
    actors: {},
    series: {},
    private: false
}

function seriesFunc() {
    for (let i = 0; i < 2; i++) {
        let serialTitle = prompt("Serial title?"),
            serialMark = prompt("Serial mark?");
        if (serialTitle !== "" && serialTitle != null && serialMark !== "" && serialMark != null) {
            console.log("success")
            seriesDB.series[serialTitle] = serialMark
        } else {
            console.log("error")
            i--
        }
    }
}

seriesFunc()

function countFunc(count) {
    if (count >= 10) {
        console.log("Max viewer")
    } else if (5 <= count && count < 10) {
        console.log("Normal viewer")
    } else {
        console.log("Min viewer")
    }
}

countFunc(seriesDB.count)


function writeGenres() {
    for (let i = 0; i < 3; i++) {
        let lovelySerial = prompt(`Yoqtirgan janringiz ${i + 1}?`)
        if (lovelySerial !== "" && lovelySerial !== null) {
            seriesDB.genres[i] = lovelySerial
        } else {
            i--
        }
    }
}

writeGenres()

function showDB(hidden) {
    if (!hidden) {
        console.log("seriesDB => ", seriesDB)
    }
}

showDB(seriesDB.private)

