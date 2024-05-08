const fetchBtn = document.getElementById('fetchBtn');
const triviaText = document.getElementById('trivia');

// To fetch coding trivia
    function fetchTrivia() {
        fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
        .then(response => response.json())
        .then(data => {
            const trivia = data.results[0];
            const question = trivia.question;
            const correctAnswer = trivia.correct_answer;

            triviaText.innerHTML = `
                <p><strong>Question:</strong> ${question}</p><br>
                <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
                `;
            })
        .catch(error => {
            console.error('Error fetching coding trivia:', error);
            triviaText.innerHTML = 'Failed to fetch coding trivia. Please try again later.';
        });
}

fetchBtn.addEventListener('click', fetchTrivia);