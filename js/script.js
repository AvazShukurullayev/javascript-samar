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

function countFunc() {
    if (seriesDB.count >= 10) {
        console.log("Max viewer")
    } else if (5 <= seriesDB.count && seriesDB.count < 10) {
        console.log("Normal viewer")
    } else {
        console.log("Min viewer")
    }
}

console.log(seriesDB)
countFunc()


function writeGenres() {
    for (let i = 0; i < 3; i++) {
        let lovelySerial = prompt("Yoqtirgan janringiz?")
        if (lovelySerial !== "" && lovelySerial !== null) {
            seriesDB.genres[i] = lovelySerial
        } else {
            i--
        }
    }
}

writeGenres()

function showDB() {
    if (!seriesDB.private) {
        console.log("seriesDB => ", seriesDB)
    }
}

showDB()

