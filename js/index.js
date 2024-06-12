const bookmarkToggle = document.querySelector('[data-js="bookmark_icon"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const darkmodeSwitch = document.querySelector('[data-js="darkmodeSwitch"]');
const darkMode = document.querySelector('[data-js="body"]');

bookmarkToggle.addEventListener("click", () => {
    bookmarkToggle.classList.toggle("bookmark-on")
});

darkmodeSwitch.addEventListener("click", () => {
    darkMode.classList.toggle("dark")
});


