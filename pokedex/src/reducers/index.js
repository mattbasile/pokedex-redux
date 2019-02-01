import {
    FETCH_POKEMON_FAIL,
    FETCH_POKEMON_START,
    FETCH_POKEMON_SUCCESS,
} from '../actions'

const initialState = {
    selectedpokemon: [],
    isFetchingPokemon: false,
    error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_POKEMON_START:
    return { 
        ...state, 
        isFetchingPokemon: true
    };
  case FETCH_POKEMON_SUCCESS:
    return { 
        ...state, 
        isFetchingPokemon: false,
        selectedpokemon: payload
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
