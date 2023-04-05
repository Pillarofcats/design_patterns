import axios from 'axios'

//USE FACADE
async function getPokemon() {
  return axiosFetch('https://pokeapi.co/api/v2/pokemon/')
}
//USE FACADE
async function getPokemonAbilities(pokeID) {
  return axiosFetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`, {
    pokeID: pokeID
  })
}

//ASYNC API CALLS
getPokemon().then(pokemons =>  {
  pokemons.results.forEach((pokemon, ind) => {
    //PokeID start at 1, index starts at 0, so ++ind
    getPokemonAbilities(++ind).then(pokeAbility => {
      const abilities = pokeAbility.abilities.map(abilObj => abilObj.ability.name )
      console.log(`Name: ${pokemon.name.toUpperCase()}, Abilities:`, abilities)
    })
  })
})

//FACADE AXIOS FETCH
async function axiosFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params
  }).then(res => res.data)
}