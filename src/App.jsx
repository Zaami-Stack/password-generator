import "./App.css";

function App() {
  const password = {
    upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "@&-_?!$#",
  };

  function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    return characters[randomIndex];
  }

  function randomUpperLetters() {
    return getRandomCharacter(password.upperCaseLetters);
  }

  function randomLowerLetters() {
    return getRandomCharacter(password.lowerCaseLetters);
  }

  function randomNumbers() {
    return getRandomCharacter(password.numbers);
  }

  function randomSymbols() {
    return getRandomCharacter(password.symbols);
  }

  function generatePassword() {
    let generatedPassword = "";

    for (let i = 0; i < 5; i++) {
      generatedPassword += randomUpperLetters();
    }

    for (let i = 0; i < 5; i++) {
      generatedPassword += randomLowerLetters();
    }

    for (let i = 0; i < 5; i++) {
      generatedPassword += randomNumbers();
    }

    for (let i = 0; i < 5; i++) {
      generatedPassword += randomSymbols();
    }

    return generatedPassword;
  }



  return (
    <>
      
    </>
  )
}

export default App;
