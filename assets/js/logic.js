
// Creating a button to toggle dark mode on/off
const modeToggleBtn = document.querySelector('.mode-toggle');

modeToggleBtn.addEventListener('click', function(event){
  document.body.classList.toggle('dark-mode');
});

// Changing the toggle button theme from sun to moon when dark mode is on
let btnTheme = document.getElementById("btn-theme");

function btnClick() {
  if(btnTheme.textContent === '☀️') {
    btnTheme.textContent = "🌒"
  } else {
    btnTheme.textContent = "☀️"
  };
};
btnTheme.addEventListener('click', btnClick)
console.log(btnTheme)