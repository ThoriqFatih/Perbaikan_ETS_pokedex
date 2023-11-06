const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const pokemonList = data.results;
    const pokemonContainer = document.getElementById('pokemonContainer');

    pokemonList.forEach(pokemon => {

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('col-xl-3', 'col-md-6', 'mb-4');

      const cardContent = document.createElement('div');
      cardContent.classList.add('card', 'border-primary', 'shadow', 'h-100', 'py-2');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-center');

      const pokemonName = document.createElement('p');
      pokemonName.classList.add('mb-2');
      pokemonName.textContent = pokemon.name;

      const detailButton = document.createElement('a');
      detailButton.href = 'pokemon.url';
      detailButton.classList.add('btn', 'btn-primary');
      detailButton.textContent = 'Detail';

      cardBody.appendChild(pokemonName);
      cardBody.appendChild(detailButton);
      cardContent.appendChild(cardBody);
      cardDiv.appendChild(cardContent);

      pokemonContainer.appendChild(cardDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
