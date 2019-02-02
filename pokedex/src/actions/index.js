import axios from 'axios';

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAIL = "FETCH_POKEMON_FAIL"; 


export const getPokemon = pokemon => dispatch =>{
    dispatch({type: FETCH_POKEMON_START});
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => dispatch({type: FETCH_POKEMON_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_POKEMON_FAIL, payload: err}))
  }

  // export const getPokemonByID = id => dispatch =>{
  //   dispatch({type: FETCH_POKEMON_ID_START});
  //   axios
  //   .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //   .then(res => dispatch({type: FETCH_POKEMON_SUCCESS, payload: res.data}))
  //   .catch(err => dispatch({type: FETCH_POKEMON_FAIL, payload: err}))
  // }

