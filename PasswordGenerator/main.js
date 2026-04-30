
const passwordLength = 15;
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
"/"];

const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');

const genBtn = document.getElementById('btn');


const toggle = document.getElementById("toggle-dark");
const container = document.querySelector(".container");

genBtn.addEventListener('click', () => {
  let password1 = '';
  let password2 = '';

  // steps to generate both the passwords
  
  // Password 1
  // loop till 15 keep on adding random indexed charater from the characters array to the password1 variable

  for(let i=0; i<passwordLength; ++i) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password1 += characters[randomIndex];
  }

  for(let i=0; i<passwordLength; ++i) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password2 += characters[randomIndex];
  }

  passwordEl1.textContent = password1;
  passwordEl2.textContent = password2;
})



passwordEl1.addEventListener('click', () => {
  const password = passwordEl1.textContent;
  navigator.clipboard.writeText(password);

  passwordEl1.classList.add("copied");

  setTimeout(() => {
    passwordEl1.classList.remove("copied");
  }, 800);
})

passwordEl2.addEventListener('click', () => {
  const password = passwordEl2.textContent;
  navigator.clipboard.writeText(password);

  passwordEl2.classList.add("copied");

  setTimeout(() => {
    passwordEl2.classList.remove("copied");
  }, 800);
})


toggle.addEventListener("change", () => {
  container.classList.toggle("light");
  document.body.classList.toggle("light-body");
});
