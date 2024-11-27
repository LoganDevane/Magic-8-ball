
const answers = [
    "Don't know, ask Bart!",
    "Homer says yes!",
    "Marge is skeptical.",
    "Lisa believes it’s true!",
    "Maggie is silent as always.",
    "It’s a definite maybe.",
    "Yes, but only if you buy donuts.",
    "No way, not a chance.",
    "Of course, it’s totally possible!",
    "Homer thinks so, but he’s drunk!",
    "Lisa would disagree with you.",
    "Maybe next time!",
    "I don't know...ask Mr. Burns."
];

const ball = document.getElementById('ball');
const ballAnswer = document.getElementById('ball-answer');
const shakeButton = document.getElementById('shake-button');
const questionInput = document.getElementById('question-input');


function shakeBall() {

    const question = questionInput.value.trim();

   
    if (!question) {
        ballAnswer.textContent = "You must ask a question!";
        return;
    }

    ballAnswer.textContent = "Shaking... Wait for it!";


    ball.style.animation = 'rotate 2s ease-out';

  
    setTimeout(() => {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        ballAnswer.textContent = randomAnswer;
      
        ball.style.animation = '';
    }, 2000);
}


shakeButton.addEventListener('click', shakeBall);
