const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  console.dir(pokemon, { maxArrayLength: null })

 


  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = ['Game Difficulty: Medium']
console.log("Exercise 3",game.difficulty);





/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
let pokemonName = "Pikachu";
let selectedPokemon = pokemon.find(p => p.name === pokemonName);
game.party.push(selectedPokemon)
console.log(game.party)



/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
function addToParty(pokemonToAdd) {
  game.party.push(pokemonToAdd);
  console.log(`${pokemonToAdd.name} added to the party!`);
}
const grassPokemon = pokemon.find(p => p.type === 'grass' && p.hp > 70); // Chose a grass type with high hp fron the data
addToParty(grassPokemon);
const waterPokemon = pokemon.find(p => p.type === 'water' && p.hp > 50 && p.hp < 80);
addToParty(waterPokemon);
const firePokemon = pokemon.find(p => p.type === 'fire' && p.hp < 50);
addToParty(firePokemon);

console.log(game.party)

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?

// sort() will sort it in lexicographic = (alphabet + numbers + symbols.)
Solve Exercise 6 here:
*/
game.party.sort((a , b) => a.hp - b.hp);
console.log('Party Members HP',game.party);





/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/
function markGymsCompleted(game) { // we are creating a function to go through the list of gyms and change it to true.
  for (let i = 0; i < game.gyms.length; i++) {
      game.gyms[i].completed = true;
  }
  return "All gyms marked as completed.";
}
console.log(markGymsCompleted(game));

/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/

function replaceNamesWithEvolvedForms(party) {
  const evolvedForms = {
      "Pikachu": "Raichu",
      "Charmander": "Charmeleon",
      "Wartortle": "Blastoise",
      "Venusaur": "Ivysaur"
    };

    for (let i = 0; i < game.party.length; i++) {
      const pokemon = game.party[i];
      // Check if the Pokémon's name is in the evolvedForms dictionary
      if (evolvedForms.hasOwnProperty(pokemon.name)) {
          // If yes, update the name with the evolved form
          pokemon.name = evolvedForms[pokemon.name];
      }
  }
}

// We Call the function to replace names with evolved forms
replaceNamesWithEvolvedForms();

// Log the updated party array to see the changes



/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/
game.party.forEach(pokemon => {
  console.log(pokemon.name);
});


/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/
console.log("Starter Pokémon:")
pokemon.forEach(poke => {
  if (poke.starter) {
    console.log(poke.name);
  }
});

/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/


function catchPokemon(game, pokemonObj) {
  game.party.push(pokemonObj);
}
const pokemonToCatch = pokemon[0]; // Choose a Pokémon object from the pokemon array
catchPokemon(game, pokemonToCatch);

// Verify that the Pokémon was added to the party
console.log("Party after catching Pokémon:", game.party);


/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);

  let pokeBallItem = game.items.findIndex((item) => item.name === 'pokeball');
  if(pokeBallItem !== -1) {
    game.items[pokeBallItem].quantity --;
  };
}
console.log(game.items);


/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/

game.gyms.forEach(gym => {
  // Check if the gym's difficulty is below 6
  if (gym.difficulty < 6) {
      // Update the completed property to true
      gym.completed = true;
  }
});

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/


const gymTally = { completed: 0 , incomplete: 0};
game.gyms.forEach(gym => {
  if (gymTally.completed) {
    gymTally.completed++;
  } else {
    gymTally.incomplete++;
  }
})
console.log(gymTally)
console.log(game)