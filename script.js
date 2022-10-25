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
//hey
container.addEventListener('click', function (e) {
    console.log(e.currentTarget.id);
    if (e.target == rock) {
        console.log("Yep u clicked on rock");
    }
    else {
        console.log("no");
    }
})





















