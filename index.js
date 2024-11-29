let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let scoreHome = 0
let scoreGuest = 0

function addOneHome() {
    scoreHome += 1
    homeScore.textContent = scoreHome 
}

function addTwoHome() {
    scoreHome += 2
    homeScore.textContent = scoreHome 
}

function addThreeHome() {
    scoreHome += 3
    homeScore.textContent = scoreHome 
}

function addOneGuest() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function addTwoGuest() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest 
}

function addThreeGuest() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest 
}

function reset() {
    scoreHome = 0
    homeScore.textContent = scoreHome
    scoreGuest = 0
    guestScore.textContent = scoreGuest
}
