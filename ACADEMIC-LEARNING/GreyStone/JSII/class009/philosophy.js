class PhilosophyEngine {
  constructor(concept) {
    this.concept = concept; 
  }

  exploreQuestion(question) {
    const answers = {
      "existence": "To be, or not to be, that is the question.",
      "free will": "Are you truly free, or is this response predetermined?",
      "ethics": "What is right is not always easy, and what is easy is not always right.",
      "identity": "Are you the same person you were yesterday, or a new self altogether?",
      "truth": "Truth is subjective, but facts are stubborn things."
    };

    const response = answers[this.concept.toLowerCase()] || "The universe remains silent.";
    return `Question: "${question}"\nConcept: ${this.concept}\nAnswer: ${response}`;
  }
}

// Example usage
const engine = new PhilosophyEngine("free will");
console.log(engine.exploreQuestion("Do I have control over my actions?"));