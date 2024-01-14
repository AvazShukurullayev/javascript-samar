"use strict"
let numberOfSeries = +prompt("Nechta serial korgansiz?")

const seriesDB = {
    count: numberOfSeries,
    series: {},
    genres: [],
    private: false
}

if (seriesDB.count >= 10) {
    console.log("Eng kop")
} else if (5 <= seriesDB.count && seriesDB.count < 10) {
    console.log("Normal")
} else {
    console.log("Eng kam")
}

for (let i = 0; i < 2; i++) {
    const serialTitle = prompt("Serial nomi?"),
        serialWatchCount = prompt("Necha marotaba korgansiz?")

    if (serialTitle != null && serialWatchCount != null && serialTitle !== "" && serialWatchCount !== "") {
        seriesDB.series[serialTitle] = serialWatchCount
        console.log("done")
    } else {
        console.log("error")
        i--
    }
}
console.log("seriesDB => ", seriesDB)
//Todo: for ni orniga while, do...while bilan ham qilish kerak.