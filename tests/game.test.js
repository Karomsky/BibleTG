import { updateUI } from "../src/ui.js";

// Placeholder for unit tests
test("Sample test", () => {
  expect(1 + 1).toBe(2);
});

test("updateUI should update the question and score elements", () => {
  document.body.innerHTML = `
    <div id="question"></div>
    <div id="score"></div>
  `;

  const gameState = {
    currentQuestion: { text: "What is the first book of the Bible?" },
    score: 10,
  };

  updateUI(gameState);

  expect(document.getElementById("question").textContent).toBe(
    "What is the first book of the Bible?",
  );
  expect(document.getElementById("score").textContent).toBe("Score: 10");
});
