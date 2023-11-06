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
      cardBody.classList.add('card-body');
      const row = document.createElement('div');
      row.classList.add('row', 'no-gutters', 'align-items-center');
      const col = document.createElement('div');
      col.classList.add('col', 'mr-2');
      col.textContent = pokemon.name;

      const detailButton = document.createElement('a');
      detailButton.href = '#';
      detailButton.classList.add('btn', 'btn-primary');
      detailButton.textContent = 'Detail';

      row.appendChild(col);
      row.appendChild(detailButton);
      cardBody.appendChild(row);
      cardContent.appendChild(cardBody);
      cardDiv.appendChild(cardContent);

      pokemonContainer.appendChild(cardDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    
  