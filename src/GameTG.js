import { db, authenticateUser } from "./firebase.js";
import { shuffleArray } from "./utils.js";

let gameState = {
  currentQuestionIndex: 0,
  score: 0,
  questions: [],
};

// Function to start the game
const startGame = async () => {
  try {
    await authenticateUser();
    console.log("Authentication successful. Loading questions...");
    await loadQuestions();
    displayQuestion();
  } catch (error) {
    console.error("Failed to start the game:", error);
  }
};

// Function to load questions from Firestore
const loadQuestions = async () => {
  const questionsRef = db.collection(
    "artifacts/YOUR_APP_ID/public/data/trivia",
  );
  const snapshot = await questionsRef.get();

  // Shuffle the questions for randomness
  gameState.questions = shuffleArray(snapshot.docs.map((doc) => doc.data()));
  console.log("Questions loaded:", gameState.questions);
};

// Function to display the current question
const displayQuestion = () => {
  const question = gameState.questions[gameState.currentQuestionIndex];
  if (!question) {
    endGame();
    return;
  }
  console.log("Displaying question:", question);
  // Update the UI with the question and answers
};

// Function to end the game
const endGame = () => {
  console.log("Game over! Final score:", gameState.score);
  // Show the "Game Over" modal
};

// Start the game
startGame();
