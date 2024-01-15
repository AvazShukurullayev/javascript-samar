"use strict"

let numberOfSeries

function startApp() {
    numberOfSeries = +prompt("Necha marta serial korgansiz?")
    while (numberOfSeries === 0 || numberOfSeries === "" || numberOfSeries === null) {
        numberOfSeries = +prompt("Necha marta serial korgansiz?")
    }
}

startApp()

const series = {
    count: numberOfSeries,
    genres: [],
    series: {},
}

console.log(series)