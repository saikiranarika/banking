  // Predefined account info
  const correctLoginId = 'kiran';  // User's Login ID
  const correctPin = '1234';  // User's PIN
  let balance = 10000;  // Initial balance

  // Function to handle login
  function login() {
      const enteredLoginId = document.getElementById("login-id").value;
      const enteredPin = document.getElementById("login-pin").value;
      const loginMessage = document.getElementById("login-message");

      // Check if the entered credentials match the stored credentials
      if (enteredLoginId === correctLoginId && enteredPin === correctPin) {
          // Hide the login section and show the banking dashboard
          document.getElementById("login-section").style.display = "none";
          document.getElementById("bank-dashboard").style.display = "block";
      } else {
          loginMessage.textContent = "Invalid Login ID or PIN!";
      }
  }
  // Function to handle balance reveal on correct PIN
  function promptForBalance() {
      let enteredPin = prompt("Please enter your PIN to view the balance:");
      
      if (enteredPin === correctPin) {
          document.getElementById("balance").textContent = balance;
      } else {
          alert("Incorrect PIN! Access to balance denied.");
      }
  }

  // Function to handle PIN check before debiting
  function promptPinForDebit() {
      let enteredPin = document.getElementById("transaction-pin").value;
      
      if (enteredPin === correctPin) {
          debitAmount();
      } else {
          document.getElementById("message").textContent = "Incorrect PIN for Debit!";
      }
  }

  // Function to handle debit amount
  function debitAmount() {
      let debitInput = document.getElementById("debit-amount").value;
      let debitValue = parseInt(debitInput);

      if (debitValue <= balance && debitValue > 0) {
          balance -= debitValue;
          document.getElementById("message").textContent = "Amount debited: " + debitValue;
      } else {
          document.getElementById("message").textContent = "Invalid debit amount!";
      }

      // If balance is visible, update it
      if (document.getElementById("balance").textContent != "****") {
          document.getElementById("balance").textContent = balance;
      }
  }

  // Function to handle PIN check before crediting
  function promptPinForCredit() {
      let enteredPin = document.getElementById("credit-pin").value;
      
      if (enteredPin === correctPin) {
          creditAmount();
      } else {
          document.getElementById("message").textContent = "Incorrect PIN for Credit!";
      }
  }

  // Function to handle credit amount
  function creditAmount() {
      let creditInput = document.getElementById("credit-amount").value;
      let creditValue = parseInt(creditInput);

      if (creditValue > 0) {
          balance += creditValue;
          document.getElementById("message").textContent = "Amount credited: " + creditValue;
      } else {
          document.getElementById("message").textContent = "Invalid credit amount!";
      }

      // If balance is visible, update it
      if (document.getElementById("balance").textContent != "****") {
          document.getElementById("balance").textContent = balance;
      }
  }