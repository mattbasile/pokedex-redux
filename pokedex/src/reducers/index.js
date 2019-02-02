import {
    FETCH_POKEMON_FAIL,
    FETCH_POKEMON_START,
    FETCH_POKEMON_SUCCESS,
} from '../actions'

const initialState = {
    selectedPokemon: [],
    isFetchingPokemon: false,
    error: null,
    pokemonImg: null,
    pokemonMoves: [],
    pokemonTypes: [],

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_POKEMON_START:
    return { 
        ...state, 
        isFetchingPokemon: true,
        error: null
    };
  case FETCH_POKEMON_SUCCESS:
    return { 
        ...state, 
        isFetchingPokemon: false,
        selectedPokemon: payload,
        pokemonImg: `https://img.pokemondb.net/artwork/${payload.name}.jpg`,
        pokemonMoves: payload.moves.slice(0,4),
        pokemonTypes: payload.types,
    };
  case FETCH_POKEMON_FAIL:
    return { 
        ...state, 
        isFetchingPokemon: false,
        error: payload
    };
  default:
    return state
  }
}
