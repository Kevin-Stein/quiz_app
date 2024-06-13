const bookmarkIconToggle = document.querySelector('[data-js="bookmark_icon"]');
const checkbox = document.querySelector("input[name=checkbox]");
const darkMode = document.querySelector('[data-js="body"]');
const showButtons = document.querySelectorAll(".showbutton");
const hideButtons = document.querySelectorAll(".hidebutton");
const newCardForm = document.querySelector('[data-js="newcard__form"]');
const createButton = document.querySelector('[data-js="create_button"]');
const cancelButton = document.querySelector('[data-js="cancel_button"]');
const appBody = document.querySelector('[data-js="appbody"]');




document.addEventListener("touchstart", function() {}, true);



/* ↓TOGGLE BOOKMARK COLOR↓ */
bookmarkIconToggle.addEventListener("click", () => {
  bookmarkIconToggle.classList.toggle("bookmark-on");
});
/* ↓SHOW CREATE A CARD FORM↓ */

createButton.addEventListener("click", () => {
  newCardForm.style.display = "block";
});
cancelButton.addEventListener("click", () => {
  newCardForm.style.display = "none";
});

/* ↓TOGGLE CARD↓ */
function flipCard(card) {
  // Prüfen, ob die Karte bereits umgedreht ist oder nicht
  

  // Wenn die Karte bereits umgedreht ist, entferne die Klasse, sonst füge sie hinzu
  if (card.classList.contains("is-flipped")) {
    card.classList.remove("is-flipped");
  } else {
    card.classList.add("is-flipped");
  }
}
// Click-Event für alle Show-Buttons hinzufügen
showButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    const card = button.closest(".card");

    // Flip-Funktion aufrufen
    flipCard(card);
  });
});
// Click-Event für alle Hide-Buttons hinzufügen
hideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Die Karte (card) des geklickten Buttons auswählen
    const card = button.closest(".card");

    // Flip-Funktion aufrufen
    flipCard(card);
  });
});
/* ↓FORM CREATE A CARD↓ */
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = new FormData(event.target);
  const data = Object.fromEntries(formElements);

  const newCard = document.createElement("article");

  newCard.innerHTML = `<article class="card" data-js="question_card">
<div class="card__inner">
    <div class="card__face card__face--front">
        <a class="bookmark-icon" data-js="bookmark_icon">
            <img aria-label="bookmark" 
                src="./img/bookmark_checked.svg"
                alt="bookmark icon"/>
        </a>
        <h2 class="question_text">${data.new_question__input}</h2>
        <div class="showbutton" data-js="answerButton">
            <h3 class="showbutton--textcolor">Show Answer</h3>
        </div>
        <div class="tags--position">
            <ul class="tags">
                <h4>#${data.new_tag__input}</h4>
                
            </ul>
        </div>
    </div>
    <div class="card__face card__face--back">
        <a class="bookmark-icon" data-js="bookmark_icon">
            <img aria-label="bookmark" 
                src="./img/bookmark_checked.svg"
                alt="bookmark icon"/>
        </a>
        <h2 class="answer_text">${data.new_answer__input}</h2>
        <div class="hidebutton" data-js="answerButton">
            <h3 class="hidebutton--textcolor">Hide Answer</h3>
        </div>
        <div class="tags--position">
            <ul class="tags">
                <h4>#${data.new_tag__input}</h4>
                
            </ul>
        </div>
    </div>
</div>
</article>`;

  document.body.getElementsByClassName("app__home")[0].append(newCard);
  event.target.reset();
  event.target.elements.new_question__input.focus();
});

/* ↓DARKMODE↓ */
/* checkbox.addEventListener("click", () => {
   
    document.body.classList.toggle("dark");
   
   
   
}); */
