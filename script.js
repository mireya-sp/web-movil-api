document.addEventListener('DOMContentLoaded', function () {
    // Copia todo el contenido del archivo JSON que has subido aquí:
    const gamesData = [
      {
        "title": "Deus Ex: Human Revolution - Director's Cut",
        "salePrice": "2.99",
        "normalPrice": "19.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192",
        "dealRating": "9.6",
        "metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut"
      },
      {
        "title": "Thief: Deadly Shadows",
        "salePrice": "0.98",
        "normalPrice": "8.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/6980/capsule_sm_120.jpg?t=1592493801",
        "dealRating": "9.4",
        "metacriticLink": "/game/pc/thief-deadly-shadows"
      },
      {
        "title": "Just Cause 2",
        "salePrice": "1.49",
        "normalPrice": "14.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/capsule_sm_120.jpg?t=1593180404",
        "dealRating": "9.4",
        "metacriticLink": "/game/pc/just-cause-2"
      },
      {
        "title": "Thief II: The Metal Age",
        "salePrice": "0.97",
        "normalPrice": "6.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/211740/capsule_sm_120.jpg?t=1592493747",
        "dealRating": "9.4",
        "metacriticLink": "/game/pc/thief-ii-the-metal-age"
      },
      {
        "title": "Dungeon Siege",
        "salePrice": "0.97",
        "normalPrice": "6.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/39190/capsule_sm_120.jpg?t=1592491243",
        "dealRating": "9.3",
        "metacriticLink": "/game/pc/dungeon-siege"
      },
      {
        "title": "Tomb Raider: Anniversary",
        "salePrice": "0.98",
        "normalPrice": "8.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/8000/capsule_sm_120.jpg?t=1592494287",
        "dealRating": "9.3",
        "metacriticLink": "/game/pc/tomb-raider-anniversary"
      },
      {
        "title": "Tomb Raider",
        "salePrice": "2.24",
        "normalPrice": "14.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/capsule_sm_120.jpg?t=1617888669",
        "dealRating": "9.2",
        "metacriticLink": "/game/pc/tomb-raider"
      },
      {
        "title": "F1 2020",
        "salePrice": "14.99",
        "normalPrice": "59.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/1080110/capsule_sm_120.jpg?t=1621526432",
        "dealRating": "9.1",
        "metacriticLink": "/game/pc/f1-2020"
      },
      {
        "title": "Tomb Raider: Underworld",
        "salePrice": "0.98",
        "normalPrice": "8.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/8140/capsule_sm_120.jpg?t=1592494880",
        "dealRating": "9.1",
        "metacriticLink": "/game/pc/tomb-raider-underworld"
      },
      {
        "title": "Cybernetica: Final",
        "salePrice": "1.89",
        "normalPrice": "18.99",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/1549710/capsule_sm_120.jpg?t=1614708882",
        "dealRating": "9.1",
        "metacriticLink": "/game/pc/cybernetica-final"
      },
      // Añadir más juegos según el JSON que proporcionaste
    ];
  
    const gamesList = document.getElementById('games-list');
  
    gamesData.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
  
      gameCard.innerHTML = `
        <img src="${game.thumb}" alt="${game.title}">
        <div class="details">
          <h3>${game.title}</h3>
          <p class="price">$${game.salePrice}</p>
          <p class="normal-price">$${game.normalPrice}</p>
          <p class="rating">Rating: ${game.dealRating}</p>
          <a href="${game.metacriticLink}" class="sale-btn" target="_blank">View on Metacritic</a>
        </div>
      `;
      
      gamesList.appendChild(gameCard);
    });
  });
  
