import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Jupiter",
        },
        {
          id: 3,
          question: "Which animal is known as the 'King of the Jungle'?",
          options: ["Lion", "Tiger", "Elephant", "Giraffe"],
          answer: "Lion",
        },
        {
          id: 4,
          question: "What is the chemical symbol for water?",
          options: ["H2O", "CO2", "O2", "NaCl"],
          answer: "H2O",
        },
        {
          id: 5,
          question: "Who painted the Mona Lisa?",
          options: [
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Vincent van Gogh",
            "Michelangelo",
          ],
          answer: "Leonardo da Vinci",
        },
        {
          id: 6,
          question: "What is the largest mammal in the world?",
          options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
          answer: "Blue Whale",
        },
        {
          id: 7,
          question:
            "Which technology is used for building user interfaces in React?",
          options: ["HTML", "CSS", "JavaScript", "JSX"],
          answer: "JSX",
        },
        {
          id: 8,
          question: "How many continents are there on Earth?",
          options: ["5", "6", "7", "8"],
          answer: "7",
        },
        {
          id: 9,
          question:
            "Which plant is known for its ability to survive in extreme desert conditions?",
          options: ["Cactus", "Fern", "Moss", "Bamboo"],
          answer: "Cactus",
        },
        {
          id: 10,
          question: "What is the smallest unit of life?",
          options: ["Atom", "Molecule", "Cell", "Organ"],
          answer: "Cell",
        },
      ],
      currentQuestion: 0,
      score: 0,
      showScore: false,
    };
  }
}

