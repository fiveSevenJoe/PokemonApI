// Taking the button and putting the function on it so everytime its clicked the function is called
document.querySelector(".search").addEventListener("click", getPokemon);

function lowerCaseName(string) {
  return string.toLowerCase();
}
// note how we use this function below in the data.name
function firstLetterUpper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon(event) {
  // taking the input value to grab our specific values, this case name
  const name = document.querySelector(".pokemonName").value;

  // taking the above function and using it
  const pokemonName = lowerCaseName(name);
  const upperName = firstLetterUpper(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>
    response
      .json()
      .then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `
          <div>
          <img
            src="${data.sprites.other.dream_world.front_default}"
           alt="${firstLetterUpper(data.name)}"
          />
        </div>
      </div>
      <div class="pokemonInfo">
        <h1>${firstLetterUpper(data.name)}</h1>
        
      </div>
          <p>HP: ${data.stats[0].base_stat}</p>
        </div>
        <div>
        <p>Move Set: ${data.moves[0].move.name}</p>`;
      })
      .catch((err) => {
        console.log("pokemon not found", "err");
      })
  );

  event.preventDefault();
}
// for the prevent deafult to Worker, you have to stop calling the function below

// getPokemon()
