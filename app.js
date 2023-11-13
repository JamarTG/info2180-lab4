window.onload = () => {
  const allHeroesContainer = document.getElementById("all-heroes");
  const searchButton = document.getElementById("search-btn");
  const searchField = document.getElementById("search-field");
  const singleHeroContainer = document.getElementById("single-hero");
  const body = document.querySelector("body");
  fetch("superheroes.php")
    .then((res) => res.text())
    .then((html) => {
      allHeroesContainer.innerHTML = html;
      singleHeroContainer.innerHTML = "";
    })
    .catch(console.error);
  searchButton.onclick = () => {
    const query = searchField.value;
    fetch("superheroes.php?query=" + query)
      .then(async (res) => res.text())
      .then((html) => {
        try {
          const parsedJSON = JSON.parse(html);
          const alias = document.createElement("h2");
          alias.textContent = parsedJSON.alias;
          const name = document.createElement("h3");
          name.textContent = "A.K.A " + parsedJSON.name;
          const bio = document.createElement("p");
          bio.textContent = parsedJSON.biography;
          singleHeroContainer.innerHTML = "";
          singleHeroContainer.appendChild(alias);
          singleHeroContainer.appendChild(name);
          singleHeroContainer.appendChild(bio);
          allHeroesContainer.innerHTML = "";
          body.appendChild(singleHeroContainer);
        } catch {
          singleHeroContainer.textContent = html;
        }
      })
      .catch(console.error);
  };
};
