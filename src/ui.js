// Function to update the UI based on the game state
export const updateUI = (gameState) => {
  // Get the DOM elements for the question and score
  const questionElement = document.getElementById("question");
  const scoreElement = document.getElementById("score");

  // Update the question text if available
  if (gameState.currentQuestion) {
    questionElement.textContent = gameState.currentQuestion.text;
  }

  // Update the score display
  scoreElement.textContent = `Score: ${gameState.score}`;
};
