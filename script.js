let count = 1;
function myFun(data) {
    if (count % 2 !== 0 && count <= 9) {  // Check if it's the player's turn
        if (document.getElementById(data.id).innerHTML === "") {
            if (count % 2 === 0) {
                document.getElementById(data.id).innerHTML = "0";
            } else {
                document.getElementById(data.id).innerHTML = "X";
            }
            count++;

            if (win()) {
                alert("You Win");
                reset();
                return;
            }

            if (count <= 9) {
                setTimeout(computerMove, 500);  // Delay computer move to simulate thinking
            } else {
                alert("Match Drawn");
                reset();
            }
        }
    }
}
function computerMove() {
    let emptyCells = Array.from(document.querySelectorAll('.game-cell'))
        .filter(cell => cell.innerHTML === "");
    if (emptyCells.length > 0) {
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.innerHTML = count % 2 === 0 ? "0" : "X";
        count++;

        if (win()) {
            alert("Computer Wins!");
            reset();
        } else if (count > 9) {
            alert("Match Drawn");
            reset();
        }
    }
}
function win(){
    if(check("div1","div2","div3")||check("div1","div4","div7")||check("div3","div6","div9")||check("div7","div8","div9")||check("div1","div5","div9")||check("div7","div5","div3")){
        return true;
    }
}
function check(div1,div2,div3) {
    if (document.getElementById(div1).innerHTML != "" && document.getElementById(div2).innerHTML != "" && document.getElementById(div3).innerHTML != "" && document.getElementById(div1).innerHTML == document.getElementById(div2).innerHTML && document.getElementById(div2).innerHTML == document.getElementById(div3).innerHTML) {
        return true;
    }
}
function reset() {
    count = 1;
    let cells = document.querySelectorAll('.game-cell');
    cells.forEach(cell => {
        cell.innerHTML = "";
    });
}