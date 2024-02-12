document.addEventListener("DOMContentLoaded", function() {
  let d4 = document.getElementById("d4");
  let d6 = document.getElementById("d6");
  let d8 = document.getElementById("d8");
  let d10 = document.getElementById("d10");
  let d12 = document.getElementById("d12");
  let d20 = document.getElementById("d20");
  let d100 = document.getElementById("d100");
  
  let selectedDice = null; 
  
  d4.addEventListener("click", function() {
    handleDiceClick(this, 4);
  });
  d6.addEventListener("click", function() {
    handleDiceClick(this, 6);
  });
  d8.addEventListener("click", function() {
    handleDiceClick(this, 8);
  });
  d10.addEventListener("click", function() {
    handleDiceClick(this, 10);
  });
  d12.addEventListener("click", function() {
    handleDiceClick(this, 12);
  });
  d20.addEventListener("click", function() {
    handleDiceClick(this, 20);
  });
  d100.addEventListener("click", function() {
    handleDiceClick(this, 100);
  });

  function handleDiceClick(dice, maxValue) {
    resetBorders();
    dice.style.border = "2px solid yellow";
    selectedDice = {dice: dice, maxValue: maxValue};
  }

  function resetBorders() {
    let allDice = document.querySelectorAll(".container img");
    allDice.forEach(function(dice) {
      dice.style.border = "none";
    });
  }

  document.getElementById("rollButton").onclick = () => {
    if (selectedDice) {
      let results = [];
      let minValue = 1; 
      let increment = 10; 
      if (selectedDice.maxValue === 100) {
        minValue = 10; 
        increment = 10;
      }

      let sum = 0; 
          for (let i = 0; i < document.getElementById("numDice").value; i++) {
            let result = Math.floor(Math.random() * (selectedDice.maxValue - minValue + 1)) + minValue; 
            sum += result; 
            results.push(result);
          }
          let formattedResults = results.map(result => Math.floor(result / increment) * increment);
          document.getElementById("result").innerText = "The results of the throws: " + results.join(", "); 
          document.getElementById("summa").innerText = "Sum: " + sum; 
        } else {
          alert("Select a die before throwing.");
        }
      };
    });

    document.getElementById("numDice").addEventListener("input", function() {
      let maxAllowed = parseInt(this.getAttribute("max"));
      let currentValue = parseInt(this.value);
      
      if (currentValue > maxAllowed) {
        this.value = maxAllowed;
      }
    });