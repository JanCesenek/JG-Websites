// VARIABLES
const clock = document.querySelector(".clock");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const login = document.querySelector(".login-btn");
const logout = document.querySelector(".logout-btn");
const defaultSite = document.querySelector(".default-site");
const afterLogin = document.querySelector(".after-login");
const movementsDisplay = document.querySelector(".movements-display");
const currentMoney = document.querySelector(".balance");
const signUp = document.querySelector(".sign-up-btn");
const sendMoneyBtn = document.querySelector(".send-money-btn");
const sendMoneyUsername = document.querySelector(".send-money-username");
const sendMoneyAmount = document.querySelector(".send-money-amount");
const loanBtn = document.querySelector(".loan-btn");
const loanPassowrd = document.querySelector(".loan-password");
const loanAmount = document.querySelector(".loan-amount");
const deleteAccountBtn = document.querySelector(".delete-account-btn");
const deleteAccountUsername = document.querySelector(
  ".delete-account-username"
);
const deleteAccountPassword = document.querySelector(
  ".delete-account-password"
);
const ower = document.querySelector(".ower");
const owerTime = document.querySelector(".ower-time");
const userDied = document.querySelector(".user-died");
let currentAccount, recipientBalance, senderBalance, userDisplay, timer;
// create dates
const presentDate = new Date();
const presentDay = presentDate.getDate();
const presentMonth = presentDate.getMonth() + 1;
const presentYear = presentDate.getFullYear();

const updateClock = function () {
  const presentDate = new Date();
  const presentDay = presentDate.getDate();
  const presentMonth = presentDate.getMonth() + 1;
  const presentYear = presentDate.getFullYear();
  const presentHour = presentDate.getHours();
  const presentMinutePreset = presentDate.getMinutes();
  const presentMinute = String(presentMinutePreset).padStart(2, 0);
  const presentSecondPreset = presentDate.getSeconds();
  const presentSecond = String(presentSecondPreset).padStart(2, 0);
  clock.textContent = `${presentDay}/${presentMonth}/${
    presentYear + 100
  }  ${presentHour}:${presentMinute}:${presentSecond}`;
};

setInterval(updateClock, 1000);

// array where we store maps - each map contains one user's data
const userDataAll = [
  new Map([
    ["firstName", "John"],
    ["lastName", "Doe"],
    ["password", "1111"],
    ["userName", "JD105"],
    ["currentBalance", 3700],
    ["transactions", [1000, -200, 1500, 1000, -100]],
    ["owes", false],
  ]),
  new Map([
    ["firstName", "Sarah"],
    ["lastName", "Smith"],
    ["password", "2222"],
    ["userName", "SS188"],
    ["currentBalance", 4250],
    ["transactions", [4000, -1000, -500, 200, 1050]],
    ["owes", false],
  ]),
  new Map([
    ["firstName", "Zac"],
    ["lastName", "Turner"],
    ["password", "3333"],
    ["userName", "ZT44"],
    ["currentBalance", 10],
    ["transactions", [-200, -50, 100, -340]],
    ["owes", false],
  ]),
];
// displaying number of accounts trapped in Matrix
const victims = document.querySelector(".victims");
victims.textContent = userDataAll.length;

// displaying a list of accounts trapped in Matrix
const displayUsernames = document.querySelector(".display-usernames");
const displayUsernamesContainer = document.querySelector(
  ".display-usernames-container"
);
// ---------------------------------------------------------------------------
// -------------------------------HTML----------------------------------------
// ---------------------------------------------------------------------------
const html = `
  <div class="movement movement-incoming">
    <div class="movement-date">
      <h3 class="heading-3">
        1/1/2121
      </h3>
    </div>
    <div class="movement-person">
      <h3 class="heading-3">
       gift from Matrix 🤨
      </h3>
    </div>
    <div class="movement-number">
      <h3 class="heading-3">
       1
      </h3>
    </div>
    <div class="movement-type">
      <h3 class="heading-3">
       incoming
      </h3>
    </div>
    <div class="movement-amount">
      <h3 class="heading-3">
       $500
      </h3>
    </div>
  </div>
`;

const welcomeUser = `
<div class="welcome">
<h2 class="heading-2">Welcome <span class="user-display"></span></h2>
</div>`;
// -------------------------------------------------------------------------------
// --------------------------FUNCTIONS--------------------------------------------
// -------------------------------------------------------------------------------
const displayUsernamesFunction = function () {
  displayUsernames.innerHTML = "";
  if (userDataAll.length === 0)
    displayUsernamesContainer.classList.add("hidden");
  else displayUsernamesContainer.classList.remove("hidden");
  userDataAll.forEach(function (map) {
    const firstName = map.get("firstName");
    const lastName = map.get("lastName");
    const username = map.get("userName");
    const displayUsernamesHTML = `
    <h2 class="heading-2">
      ${firstName} ${lastName} - ${username}
    </h2>
  `;
    displayUsernames.insertAdjacentHTML("afterbegin", displayUsernamesHTML);
  });
};
displayUsernamesFunction();
console.log(...userDataAll);

// function for transactions
const displayMovements = function (movements) {
  movementsDisplay.innerHTML = "";
  if (movements.length > 0) {
    movements.forEach(function (mov, i) {
      const type = mov > 0 ? "incoming" : "outgoing";
      const personType = "default";
      const transactionPattern = `
        <div class="movement movement-${type}">
          <div class="movement-date">
            <h3 class="heading-3">
            ${presentDay}/${presentMonth}/${presentYear + 100}
            </h3>
          </div>
          <div class="movement-person">
            <h3 class="heading-3">
            ${personType}
            </h3>
          </div>
          <div class="movement-number">
            <h3 class="heading-3">
            ${i + 2}
            </h3>
          </div>
          <div class="movement-type">
            <h3 class="heading-3">
            ${type}
            </h3>
          </div>
          <div class="movement-amount">
            <h3 class="heading-3">
            $${Math.abs(mov)}
            </h3>
          </div>
        </div>
      `;
      movementsDisplay.insertAdjacentHTML("afterbegin", transactionPattern);
    });
  }
  movementsDisplay.insertAdjacentHTML("beforeend", html);
};
// --------------------------------------------------------------------------------------------------------
// -------------------------------------------LOGOUT-------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// what happens after pressing 'Log out' button (visible only after logging in)
const softLogout = function () {
  movementsDisplay.innerHTML = "";
  victims.textContent = userDataAll.length;
  displayUsernamesFunction();
  defaultSite.classList.remove("hidden");
  afterLogin.classList.add("hidden");
};

logout.addEventListener("click", softLogout);
// ----------------------------------------------------------------------------------------------
// ------------------------------------------------SIGNUP----------------------------------------
// ----------------------------------------------------------------------------------------------
// what happens after pressing 'Sign up button'
signUp.addEventListener("click", function () {
  // three simple prompts asking a user to fill in their details which are later used for setting up a new account
  const firstName = prompt("What is your first name?");
  const lastName = prompt("What is your surname?");
  const password = prompt("Choose a password: between 8 and 16 characters");
  // checking if both firstName and lastName contain ONLY letters and if password has the correct length
  if (
    firstName.length >= 2 &&
    lastName.length >= 2 &&
    /^[a-zA-Z]+$/.test(firstName) &&
    /^[a-zA-Z]+$/.test(lastName) &&
    password.length >= 8 &&
    password.length <= 16
  ) {
    currentMoney.textContent = 500;
    // username is created by a following pattern: uppercased user's initials + random number from 1 to 999
    let userName =
      firstName[0].toUpperCase() +
      lastName[0].toUpperCase() +
      Math.trunc(Math.random() * 1000);

    const usernamePerfection = function () {
      let usernameCondition = userDataAll.some(
        (acc) => acc.get("userName") === userName
      );
      while (usernameCondition) {
        usernameCondition = userDataAll.some(
          (acc) => acc.get("userName") === userName
        );
        userName =
          firstName[0].toUpperCase() +
          lastName[0].toUpperCase() +
          Math.trunc(Math.random() * 1000);
      }
    };
    usernamePerfection();

    currentAccount = userDataAll.find(
      (acc) => acc.get("userName") === userName
    );
    // create variables for the Map object
    const firstNameValue =
      firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    const lastNameValue =
      lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    // Logs you in
    afterLogin.classList.remove("hidden");
    // create a new map - place where we store user's data
    const userData = new Map([
      ["firstName", firstNameValue],
      ["lastName", lastNameValue],
      ["password", password],
      ["userName", userName],
      ["currentBalance", 500],
      ["transactions", []],
      ["owes", false],
    ]);
    userDataAll.push(userData);
    victims.textContent = userDataAll.length;
    console.log(...userDataAll);
    // welcome message
    const child = afterLogin.children[0];
    !child.classList.contains("welcome") &&
      afterLogin.insertAdjacentHTML("afterbegin", welcomeUser);
    movementsDisplay.insertAdjacentHTML("beforeend", html);
    userDisplay = document.querySelector(".user-display");
    userDisplay.textContent = userName;
    defaultSite.classList.add("hidden");
  } else if (password.length < 8) {
    alert("Password too short! Try again...");
  } else if (password.length > 16) {
    alert("Password too long! Try again...");
  } else {
    alert(
      "Incorrect details! Try again... Both first name and surname must contain only letters and be at least 2 characters long, password needs to be between 8 and 16 characters long!"
    );
  }
});
// --------------------------------------------------------------------------------------------
// ----------------------------------------LOGIN-----------------------------------------------
// --------------------------------------------------------------------------------------------
// what happens after pressing 'Log in' button
login.addEventListener("click", function (e) {
  e.preventDefault();

  userDataAll.forEach(function (map) {
    const usernameMatch = map.get("userName");
    const passwordMatch = map.get("password");
    if (username.value === usernameMatch && password.value === passwordMatch) {
      currentAccount = userDataAll.find(
        (acc) => acc.get("userName") === username.value
      );
      // if welcomeUser doesn't exist, create one
      const child = afterLogin.children[0];
      !child.classList.contains("welcome") &&
        afterLogin.insertAdjacentHTML("afterbegin", welcomeUser);
      // update the current user balance
      const currentUserBalance = currentAccount.get("currentBalance");
      currentMoney.textContent = currentUserBalance;
      // executes the function
      const transactions = currentAccount.get("transactions");
      displayMovements(transactions);
      userDisplay = document.querySelector(".user-display");
      userDisplay.textContent = username.value;
      // logs you in
      defaultSite.classList.add("hidden");
      afterLogin.classList.remove("hidden");
    }
  });
  // resets the input values !! ALWAYS DO THAT AT THE END AS THE DATA IS NEEDED FOR IDENTIFICATION !!
  username.value = password.value = "";
});
// -------------------------------------------------------------------------------------------------------------
// --------------------------------------------------SENDMONEY--------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// Sending money to a different account
sendMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();

  userDataAll.forEach(function (map) {
    const usernameMatch = map.get("userName");
    const userDisplay = document.querySelector(".user-display");
    const amount = Number(sendMoneyAmount.value);
    let curBalance = Number(currentMoney.textContent);
    currentAccount = userDataAll.find(
      (acc) => acc.get("userName") === userDisplay.textContent
    );
    senderBalance = currentAccount.get("currentBalance");
    const senderTransactions = currentAccount.get("transactions");
    let owes = currentAccount.get("owes");
    const owerAmount = currentAccount.get("owerAmount");
    // Sending money to a different person
    if (
      sendMoneyUsername.value !== userDisplay.textContent &&
      sendMoneyUsername.value === usernameMatch &&
      /^[0-9]+$/.test(sendMoneyAmount.value) &&
      amount > 0 &&
      curBalance >= amount
    ) {
      // Variables
      const recipientAccount = userDataAll.find(
        (acc) => acc.get("userName") === sendMoneyUsername.value
      );
      recipientBalance = recipientAccount.get("currentBalance");
      const recipientTransactions = recipientAccount.get("transactions");
      // push the transaction to the respective transactions array - positive amount for recipient, negative amount for sender
      recipientTransactions.push(amount);
      senderTransactions.push(-amount);
      // executes the function
      displayMovements(senderTransactions);
      // update the balances for both recipient and sender
      recipientBalance += amount;
      recipientAccount.set("currentBalance", recipientBalance);
      senderBalance -= amount;
      currentAccount.set("currentBalance", senderBalance);
      // overwrite the sender's balance
      currentMoney.textContent = senderBalance;
      console.log(...userDataAll);
    }
    // Repaying your debt - becomes available only if you have any
    else if (
      owes &&
      sendMoneyUsername.value === "Matrix" &&
      amount === owerAmount
    ) {
      // Updates the respective values and executes the function
      senderTransactions.push(-amount);
      displayMovements(senderTransactions);
      senderBalance -= amount;
      currentAccount.set("currentBalance", senderBalance);
      currentMoney.textContent = senderBalance;
      // Resets the timer and removes the threat message - also sets 'owes' status to false
      clearInterval(timer);
      owerTime.textContent = "";
      ower.classList.add("hidden");
      currentAccount.delete("owerAmount");
      owes = false;
      currentAccount.set("owes", false);
    }
  });
  // resets the input values !! ALWAYS DO THAT AT THE END AS THE DATA IS NEEDED FOR IDENTIFICATION !!
  sendMoneyAmount.value = sendMoneyUsername.value = "";
});
// -----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------LOAN---------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// Taking a loan from Matrix
loanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(loanAmount.value);
  currentAccount = userDataAll.find(
    (acc) => acc.get("userName") === userDisplay.textContent
  );
  const owes = currentAccount.get("owes");
  let currentBalance = currentAccount.get("currentBalance");
  const currentTransactions = currentAccount.get("transactions");
  if (
    /^[0-9]+$/.test(loanAmount.value) &&
    amount > 0 &&
    amount % 10 === 0 &&
    !owes
  ) {
    currentBalance += amount;
    currentMoney.textContent = currentBalance;
    currentAccount.set("currentBalance", currentBalance);
    currentAccount.set("owerAmount", amount);
    currentAccount.set("owes", true);
    currentTransactions.push(amount);
    displayMovements(currentTransactions);
    console.log(...userDataAll);
    ower.classList.remove("hidden");
    const amountUnit = amount / 10;
    // Function used to measure the deadline user has to repay
    const timeToRepay = function () {
      // user has 30 seconds per every $10 borrowed
      let time = `${amountUnit * 30}`;
      // inner function triggering the clock
      const innerTimer = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        owerTime.textContent = `${min}:${sec}`;
        time--;

        if (time < 0) {
          clearInterval(timer);
          // Kill user
          userDied.classList.remove("hidden");
          // 'Log user out' after 5 seconds
          setTimeout(hardLogout, 5000);
        }
      };

      // call the timer every second
      innerTimer();
      timer = setInterval(innerTimer, 1000);

      return timer;
    };
    timeToRepay();
  } else {
    alert("Incorrect details... Amount has to be divisible by 10!");
  }
  loanPassowrd.value = loanAmount.value = "";
});
// ----------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------DELETEACCOUNT--------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// Deleting an account
const hardLogout = function () {
  const index = userDataAll.indexOf(currentAccount);
  userDataAll.splice(index, 1);
  movementsDisplay.innerHTML = "";
  userDied.classList.add("hidden");
  victims.textContent = userDataAll.length;
  ower.classList.add("hidden");
  defaultSite.classList.remove("hidden");
  afterLogin.classList.add("hidden");
  displayUsernamesFunction();
  console.log(...userDataAll);
};

deleteAccountBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userDisplay = document.querySelector(".user-display");
  currentAccount = userDataAll.find(
    (acc) => acc.get("userName") === userDisplay.textContent
  );
  const getUsername = currentAccount.get("userName");
  const getPassword = currentAccount.get("password");
  if (
    getUsername === deleteAccountUsername.value &&
    getPassword === deleteAccountPassword.value
  ) {
    hardLogout();
  }
  deleteAccountUsername.value = deleteAccountPassword.value = "";
});
