const searchInputArea = document.querySelector(".search-input");
const suggestionArea = document.querySelector(".suggestions-box");
const input = document.querySelector("#input");

/* input events */
input.onkeyup = (character) => {
  let term = character.target.value;

  if (term.length > 1) {
    term = termFormatter(term);
    searchResults(term);
  } else {
    suggestionArea.innerHTML = "";
  }
};

/* saving the original state of term searched*/
let originalTerm = "";
const setOriginalTerm = (term) => {
  originalTerm = term;
};

/* function to detect key navigation */
const checkKey = (key) => {
  key = key || window.event;

  if (key.keyCode === 39) {
    const firstElement = document.querySelector(".firstSuggestion");
    if (firstElement) {
      setOriginalTerm(input.value);
      input.value = firstElement.textContent;
    }
  }
};

input.onkeydown = checkKey;

/* event to close the suggestion box */
document.addEventListener("click", (event) => {
  let mainDiv = document.querySelector(".search-input-area"),
    clickedElement = event.target;

  do {
    if (clickedElement === mainDiv) {
      return;
    }

    clickedElement = clickedElement.parentNode;
  } while (clickedElement);

  removeSuggestionBox();
});

/* lowercase string and remove accents */
const termFormatter = (term) => {
  const chars = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    â: "a",
    ê: "e",
    ô: "o",
  };

  return term.toLowerCase().replace(/[áéíóúâêô]/g, (i) => chars[i]);
};

/* getting results from the get endpoint */
const searchResults = (term) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://localhost:5000/results/${term}`);
  xhr.setRequestHeader("API_Key", "9af4d8381781baccb0f915e554f8798d");
  xhr.send();

  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status === 200) {
      showSuggestions(term, xhr.response);
    }
  };

  xhr.onerror = () => {
    alert("API is offline!");
  };
};

/* showing the suggestions */
const showSuggestions = (term, response) => {
  const searchResults = [];

  const { highlight } = response;
  let section;
  if (highlight) {
    section = `<a target="_blank" href="${highlight.url}">
                <div class="highlight">
                  <image width=60px src="${highlight.logo}" alt="Logo da seção ${highlight.title}"></image>
                  <h3>${highlight.title}</h3>
                </div>
              </a>
              <hr/>`;

    searchResults.push(section);
  }

  let match = "";
  suggestions = response.suggestions.map((globoSuggestion, index) => {
    if (term === globoSuggestion) {
      match = `
        <hr/>
        <a target="_blank" href="http://g1.globo.com/busca/?q=${term}">
          <li class="suggestion-match">Buscar por <p> "${globoSuggestion}" </p> na Globo.com ></li>
        </a>
        <hr/>
        <a target="_blank" href="https://www.google.com/search?q=${term}">
          <li class="suggestion-match">Buscar por <p> "${globoSuggestion}" </p> na Web ></li>
        </a>
      `;
    }

    if (index === 0) {
      return (data = `<a target="_blank" href="http://g1.globo.com/busca/?q=${term}"> <li class="firstSuggestion suggs">${globoSuggestion}</li> </a>`);
    }

    return (data = `<a target="_blank" href="http://g1.globo.com/busca/?q=${term}"> <li class="suggs">${globoSuggestion}</li> </a>`);
  });

  if (match.length > 0) suggestions.push(match);

  /* getting all recomendations */
  searchResults.push(...suggestions);

  searchInputArea.classList.add("active");

  let listData;

  if (!searchResults.length) {
    userValue = input.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = searchResults.join("");
  }

  suggestionArea.innerHTML = listData;
};

const removeSuggestionBox = () => {
  input.value = "";
  suggestionArea.innerHTML = "";
};
