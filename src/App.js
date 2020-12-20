import React, { useState } from "react";
import "./styles.css";

const emojiDB = {
  "❤️": "Love",
  "💔": "Heart Broken",
  "🧡": "Support",
  "🤍": "Pure Love",
  "💛": "Friendship",
  "🤎": "Affection",
  "💜": "Compassion",
  "💙": "Trust",
  "🖤": "Sorrow",
  "💚": "Jealousy"
};

// emojiDB is Converted  To List
const emojilist = Object.keys(emojiDB);

// Handels Emoji Presses
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    // Handels TextBox Changes
    var userInput = event.target.value;
    var meaning = emojiDB[userInput];
    if (meaning === undefined) {
      meaning = "This" + userInput + "Emoji is not present in our Database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDB[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Emoji Translator</h1>
      <input
        className="text"
        placeholder={"Insert heart emoji of your choice"}
        onChange={emojiInputHandler}
      />
      <h2> {meaning} </h2>
      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
