const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = "Rock";
container.appendChild(rock); //Create rest of the buttons by DOM manipulation

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = "Paper";
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = "Scissors";
container.appendChild(scissors);

container.addEventListener('click', function (e) {
    console.log(e.target);
    
    if (e.target == rock) {
        console.log("You chose Rock!");
    }
    else if (e.target == paper) {
        console.log("You chose Paper!")
    }
    else if (e.target == scissors) {
        console.log("You chose Scissors!");
    }
    else {
        console.log("no");
    }
})





















