let music = new Audio("music.mp3")
let turns = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let reset = document.querySelector(".reset")
let turn = "X"
let gameover = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check for a win 
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 0.2, 5, 180],
        [3, 4, 5, 0.2, 15, 180],
        [6, 7, 8, 0.2, 25, 180],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0.2, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0.2, 15, 45],
        [2, 4, 6, 0.2, 15, -45],
    ]
    wins.forEach(e => {
        // console.log(boxtext[e[0]]);
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won"
            music.play()
            gameover = true;
            document.querySelector("img").style.width = '50%'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.display = 'block'
        }
    })
}

// Main Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn
            turn = changeTurn()
            turns.play()
            checkWin()
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn For" + turn
            }
        }
    })

})

// add one listenr to reset
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(ele => {
        ele.innerText = ""
    })
    turn = 'X'
    gameOver = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn For" + turn
    document.querySelector("img").style.width = '0%'
    music.pause()
    document.querySelector('.line').style.display = 'none'

})




