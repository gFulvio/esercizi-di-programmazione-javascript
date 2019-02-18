var choises = ['carta','forbici','sasso','lizard','spock'];
var player1 = choises[2];
var player2 = choises[getRandomIntInclusive(0,4)];

function game(p1, p2){
  if (p1 == 'carta' & p2 == 'sasso' || p1 == 'carta' & p2 == 'spock'){
    return `Il giocatore 1 ha vinto, ${p1} batte ${p2}`;
  } else if (p1 == 'forbici' & p2 == 'carta' || p1 == 'forbici' & p2 == 'lizard'){
    return `Il giocatore 1 ha vinto, ${p1} batte ${p2}`;
  } else if (p1 == 'sasso' & p2 == 'forbici' || p1 == 'sasso' & p2 == 'lizard'){
    return `Il giocatore 1 ha vinto, ${p1} batte ${p2}`;
  } else if (p1 == 'lizard' & p2 == 'carta' || p1 == 'lizard' & p2 == 'spock'){
    return `Il giocatore 1 ha vinto, ${p1} batte ${p2}`;
  } else if (p1 == 'spock' & p2 == 'forbici' || p1 == 'spock' & p2 == 'sasso'){
    return `Il giocatore 1 ha vinto, ${p1} batte ${p2}`;
  } else if (p1 == p2) {
    return  `Pareggio! ${p1} conto ${p2}`;
  } else {
    return  `Il giocatore 2 ha vinto, ${p2} batte ${p1}`
  }
}

function getRandomIntInclusive (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(game(player1, player2));
