'use strict';
// VARIABLES
const clock = document.querySelector('.clock');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const loginArea = document.querySelector('.login');
const login = document.querySelector('.login-btn');
const logout = document.querySelector('.logout-btn');
const defaultSite = document.querySelector('.default-site');
const afterLogin = document.querySelector('.after-login');
const movementsDisplay = document.querySelector('.movements-display');
const currentMoney = document.querySelector('.balance');
const signUp = document.querySelector('.sign-up-btn');
const sendMoneyArea = document.querySelector('.send-money');
const sendMoneyBtn = document.querySelector('.send-money-btn');
const sendMoneyUsername = document.querySelector('.send-money-username');
const sendMoneyAmount = document.querySelector('.send-money-amount');
const loanArea = document.querySelector('.loan');
const loanBtn = document.querySelector('.loan-btn');
const loanPassword = document.querySelector('.loan-password');
const loanAmount = document.querySelector('.loan-amount');
const deleteAccountArea = document.querySelector('.delete-account');
const deleteAccountBtn = document.querySelector('.delete-account-btn');
const deleteAccountUsername = document.querySelector('.delete-account-username');
const deleteAccountPassword = document.querySelector('.delete-account-password');
const ower = document.querySelector('.ower');
const owerTime = document.querySelector('.ower-time');
const userDied = document.querySelector('.user-died');
const topInterface = document.querySelector('.top-interface');
let currentAccount, userDisplay, timer;
// create dates
const presentDate = new Date();
const presentDayPreset = presentDate.getDate();
const presentDay = String(presentDayPreset).padStart(2, 0);
const presentMonthPreset = presentDate.getMonth() + 1;
const presentMonth = String(presentMonthPreset).padStart(2, 0);
const presentYear = presentDate.getFullYear();
// clock
const updateClock = function () {
  const presentDate = new Date();
  const presentDayPreset = presentDate.getDate();
  const presentDay = String(presentDayPreset).padStart(2, 0);
  const presentMonthPreset = presentDate.getMonth() + 1;
  const presentMonth = String(presentMonthPreset).padStart(2, 0);
  const presentYear = presentDate.getFullYear();
  const presentHour = presentDate.getHours();
  const presentMinutePreset = presentDate.getMinutes();
  const presentMinute = String(presentMinutePreset).padStart(2, 0);
  const presentSecondPreset = presentDate.getSeconds();
  const presentSecond = String(presentSecondPreset).padStart(2, 0);
  clock.textContent = `${presentDay}/${presentMonth}/${presentYear + 100}  ${presentHour}:${presentMinute}:${presentSecond}`;
};

setInterval(updateClock, 1000);
// ------------------------------------------------------------------------
// ----------------------------ES6 class-----------------------------------
// ------------------------------------------------------------------------
class userData {
  constructor(firstName, lastName, password, userName, currentBalance, transactions, owerAmount, transactionDates) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.userName = userName;
    this.currentBalance = currentBalance;
    this.transactions = transactions;
    this.owerAmount = owerAmount;
    this.transactionDates = transactionDates;
    this.locale = navigator.language;
  }

  displayMovements(movements) {
    movementsDisplay.innerHTML = '';
    const transactions = movements.transactions;
    const dates = movements.transactionDates;
    if (transactions.length > 0) {
      transactions.forEach(function (mov, i) {
        const type = mov > 0 ? 'incoming' : 'outgoing';
        const personType = 'default';
        !dates[i] && dates.push(`${presentDay}/${presentMonth}/${presentYear + 100}`);
        const displayDate = dates[i] ? dates[i] : `${presentDay}/${presentMonth}/${presentYear + 100}`;
        const transactionPattern = `
          <div class="movement movement-${type}">
            <div class="movement-date">
              <h3 class="heading-3">
              ${displayDate}
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
        movementsDisplay.insertAdjacentHTML('afterbegin', transactionPattern);
      });
    }
    movementsDisplay.insertAdjacentHTML('beforeend', html);
  }

  welcomeUser() {
    // creates a welcome message if there isn't one already
    const child = topInterface.children[0];
    !child.classList.contains('welcome') && topInterface.insertAdjacentHTML('afterbegin', welcomeUser);
  }

  logIn() {
    // logs you in
    defaultSite.classList.add('hidden');
    afterLogin.classList.remove('hidden');
    clock.classList.remove('margin');
  }

  displayUser() {
    const userName = this.userName;
    userDisplay = document.querySelector('.user-display');
    userDisplay.textContent = userName;
  }
}
// ----------------------------------------------------------------------------------------
// array where we store each user's data
const userDataAll = [
  new userData('John', 'Doe', '1111', 'JD105', 3700, [1000, -200, 1500, 1000, -100], 0, [
    '18/01/2121',
    '23/02/2121',
    '18/03/2121',
    '29/04/2121',
    '08/05/2121',
  ]),
  new userData('Sarah', 'Smith', '2222', 'SS188', 4250, [4000, -1000, -500, 200, 1050], 0, [
    '29/01/2121',
    '02/02/2121',
    '10/03/2121',
    '09/04/2121',
    '01/05/2121',
  ]),
  new userData('Zac', 'Turner', '3333', 'ZT44', 10, [-200, -50, 100, -340], 0, ['31/01/2121', '28/02/2121', '20/03/2121', '10/05/2121']),
];

// displaying number of accounts trapped in Matrix
const victims = document.querySelector('.victims');
victims.textContent = userDataAll.length;

// displaying a list of accounts trapped in Matrix
const displayUsernames = document.querySelector('.display-usernames');
const displayUsernamesContainer = document.querySelector('.display-usernames-container');
// ---------------------------------------------------------------------------
// -------------------------------HTML----------------------------------------
// ---------------------------------------------------------------------------
const html = `
  <div class="movement movement-incoming">
    <div class="movement-date">
      <h3 class="heading-3">
        01/01/2121
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
  displayUsernames.innerHTML = '';
  if (userDataAll.length === 0) displayUsernamesContainer.classList.add('invisible');
  else displayUsernamesContainer.classList.remove('invisible');
  userDataAll.forEach(function (data) {
    const displayUsernamesHTML = `
    <h2 class="heading-2">
      ${data.firstName} ${data.lastName} - ${data.userName}
    </h2>
  `;
    displayUsernames.insertAdjacentHTML('afterbegin', displayUsernamesHTML);
  });
};
displayUsernamesFunction();
console.log(...userDataAll);

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};
// --------------------------------------------------------------------------------------------------------
// -------------------------------------------LOGOUT-------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// what happens after pressing 'Log out' button (visible only after logging in)
const softLogout = function () {
  movementsDisplay.innerHTML = '';
  victims.textContent = userDataAll.length;
  displayUsernamesFunction();
  defaultSite.classList.remove('hidden');
  afterLogin.classList.add('hidden');
  clock.classList.add('margin');
};

const softLogoutSecure = function () {
  const userName = userDisplay.textContent;
  currentAccount = userDataAll.find((acc) => acc.userName === userName);
  if (currentAccount.owerAmount === 0) {
    softLogout();
  }
};

logout.addEventListener('click', softLogoutSecure);
// ----------------------------------------------------------------------------------------------
// ------------------------------------------------SIGNUP----------------------------------------
// ----------------------------------------------------------------------------------------------
// what happens after pressing 'Sign up button'
signUp.addEventListener('click', function (e) {
  e.preventDefault();
  // three simple prompts asking a user to fill in their details which are later used for setting up a new account
  const firstName = prompt('What is your first name?');
  // if a user missclicks, then he can press cancel
  if (firstName === null) return;
  const lastName = prompt('What is your surname?');
  if (lastName === null) return;
  const password = prompt('Choose a password: between 8 and 16 characters');
  if (password === null) return;
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
    let userName = firstName[0].toUpperCase() + lastName[0].toUpperCase() + Math.trunc(Math.random() * 1000);
    // probably not necessary, but just in case the generated username already exists
    const usernamePerfection = function () {
      let usernameCondition = userDataAll.some((acc) => acc.userName === userName);
      while (usernameCondition) {
        usernameCondition = userDataAll.some((acc) => acc.userName === userName);
        userName = firstName[0].toUpperCase() + lastName[0].toUpperCase() + Math.trunc(Math.random() * 1000);
      }
    };
    usernamePerfection();

    // create variables for the Map object
    const firstNameValue = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    const lastNameValue = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    // create a new ES6 class - place where we store user's data
    const userDataProto = new userData(firstNameValue, lastNameValue, password, userName, 500, [], 0, []);
    userDataAll.push(userDataProto);
    currentAccount = userDataAll.find((acc) => acc.userName === userName);
    // Logs you in
    currentAccount.logIn();
    victims.textContent = userDataAll.length;
    console.log(...userDataAll);
    // welcome message - create only if it doesn't already exist
    currentAccount.welcomeUser();
    // insert the default transaction for a new user
    movementsDisplay.insertAdjacentHTML('beforeend', html);
    currentAccount.displayUser();
  } else if (password.length < 8) {
    alert('Password too short! Try again...');
  } else if (password.length > 16) {
    alert('Password too long! Try again...');
  } else {
    alert(
      'Incorrect details! Try again... Both first name and surname must contain only letters and be at least 2 characters long, password needs to be between 8 and 16 characters long!'
    );
  }
});
// --------------------------------------------------------------------------------------------
// ----------------------------------------LOGIN-----------------------------------------------
// --------------------------------------------------------------------------------------------
// what happens after pressing 'Log in' button
const loggingIn = function (e) {
  e.preventDefault();

  userDataAll.forEach(function (data) {
    if (username.value === data.userName && password.value === data.password) {
      currentAccount = userDataAll.find((acc) => acc.userName === username.value);
      // if welcomeUser doesn't exist, create one
      currentAccount.welcomeUser();
      // update the current user balance
      const currentUserBalance = currentAccount.currentBalance;
      currentMoney.textContent = currentUserBalance;
      // executes the function
      currentAccount.displayMovements(currentAccount);
      currentAccount.displayUser();
      // logs you in
      currentAccount.logIn();
    }
  });
  // resets the input values !! ALWAYS DO THAT AT THE END AS THE DATA IS NEEDED FOR IDENTIFICATION !!
  username.value = password.value = '';
};

login.addEventListener('click', loggingIn);
loginArea.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    loggingIn(e);
  }
});
// -------------------------------------------------------------------------------------------------------------
// --------------------------------------------------SENDMONEY--------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// Sending money to a different account
const sendMoney = function (e) {
  e.preventDefault();

  userDataAll.forEach(function (data) {
    const userDisplay = document.querySelector('.user-display');
    const amount = +sendMoneyAmount.value;
    let curBalance = +currentMoney.textContent;
    currentAccount = userDataAll.find((acc) => acc.userName === userDisplay.textContent);
    const senderTransactions = currentAccount.transactions;
    // Sending money to a different person
    if (
      sendMoneyUsername.value !== userDisplay.textContent &&
      sendMoneyUsername.value === data.userName &&
      /^[0-9]+$/.test(sendMoneyAmount.value) &&
      amount > 0 &&
      curBalance >= amount
    ) {
      // Variables
      const recipientAccount = userDataAll.find((acc) => acc.userName === sendMoneyUsername.value);
      const recipientTransactions = recipientAccount.transactions;
      // push the transaction to the respective transactions array - positive amount for recipient, negative amount for sender
      recipientTransactions.push(amount);
      senderTransactions.push(-amount);
      // executes the function
      currentAccount.displayMovements(currentAccount);
      // update the balances for both recipient and sender
      recipientAccount.currentBalance += amount;
      currentAccount.currentBalance -= amount;
      // overwrite the sender's balance
      currentMoney.textContent = currentAccount.currentBalance;
      console.log(...userDataAll);
    }
    // Repaying your debt - becomes available only if you have any
    else if (currentAccount.owerAmount > 0 && sendMoneyUsername.value === 'Matrix' && amount === currentAccount.owerAmount) {
      // Updates the respective values and executes the function
      senderTransactions.push(-amount);
      currentAccount.displayMovements(currentAccount);
      currentAccount.currentBalance -= amount;
      currentMoney.textContent = currentAccount.currentBalance;
      // Resets the timer and removes the threat message - also sets 'owes' status to false
      clearInterval(timer);
      owerTime.textContent = '';
      ower.classList.add('hidden');
      currentAccount.owerAmount = 0;
    }
  });
  // resets the input values !! ALWAYS DO THAT AT THE END AS THE DATA IS NEEDED FOR IDENTIFICATION !!
  sendMoneyAmount.value = sendMoneyUsername.value = '';
};
sendMoneyBtn.addEventListener('click', sendMoney);
sendMoneyArea.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    sendMoney(e);
  }
});
// -----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------LOAN---------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// Taking a loan from Matrix
const takingLoan = function (e) {
  e.preventDefault();
  const amount = +loanAmount.value;
  currentAccount = userDataAll.find((acc) => acc.userName === userDisplay.textContent);
  const currentTransactions = currentAccount.transactions;
  // You can only take a loan if you don't have any - the amount borrowed has to be divisible by 10 - you have 30 seconds to repay for each $10 borrowed
  if (/^[0-9]+$/.test(loanAmount.value) && amount > 0 && amount % 10 === 0 && currentAccount.owerAmount === 0) {
    currentAccount.currentBalance += amount;
    currentMoney.textContent = currentAccount.currentBalance;
    currentAccount.owerAmount = amount;
    currentTransactions.push(amount);
    currentAccount.displayMovements(currentAccount);
    console.log(...userDataAll);
    ower.classList.remove('hidden');
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
          userDied.classList.remove('hidden');
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
    alert('Incorrect details... Amount has to be divisible by 10!');
  }
  loanPassword.value = loanAmount.value = '';
};
loanBtn.addEventListener('click', takingLoan);
loanArea.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    takingLoan(e);
  }
});
// ----------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------DELETEACCOUNT--------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// Deleting an account
const hardLogout = function () {
  const index = userDataAll.indexOf(currentAccount);
  userDataAll.splice(index, 1);
  userDied.classList.add('hidden');
  ower.classList.add('hidden');
  softLogout();
  console.log(...userDataAll);
};

const deleteAccount = function (e) {
  e.preventDefault();
  const userDisplay = document.querySelector('.user-display');
  currentAccount = userDataAll.find((acc) => acc.userName === userDisplay.textContent);
  if (currentAccount.userName === deleteAccountUsername.value && currentAccount.password === deleteAccountPassword.value) {
    hardLogout();
  }
  deleteAccountUsername.value = deleteAccountPassword.value = '';
};

deleteAccountBtn.addEventListener('click', deleteAccount);
deleteAccountArea.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    deleteAccount(e);
  }
});
