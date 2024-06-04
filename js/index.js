const appBodyElement = document.querySelector('[data-js="appbody"]');
const profileCardElement = document.querySelector('[data-js="profile_card"]');
const questionCardElement = document.querySelector('[data-="question_card"]');
const toggleButton = document.querySelector('[data-js="toogle-button"]');

console.log(toggleButton)

toggleButton.addEventListener('click', () => {
    appBodyElement.classList.toggle("dark");
});
