import React, { Component } from 'react'
import Pokedex from '../components/Pokedex';
import {connect} from 'react-redux';
import {getPokemon} from '../actions'

class PokedexView extends Component {
constructor(props){
    super(props);
    this.state={
        searchPoke: '',
    }
}
handleChanges = e =>{
    this.setState({
        [e.target.name]: e.target.value.toLowerCase()
    })
}
getPokemon = e =>{
    this.colorChange();
    e.preventDefault();
    this.props.getPokemon(this.state.searchPoke);
    this.setState({searchPoke: '',})
    e.target.reset();
}
getPokemonById = (e, pokemon) =>{
    this.colorChange();
    e.preventDefault();
    const fwd = pokemon.id + 1
    console.log(fwd)
    const back = pokemon.id -1
    console.log(e.target.classList)
    e.target.classList.contains('fwd-btn')
    ? this.props.getPokemon(fwd)
    : this.props.getPokemon(back);
    
}


colorChange = () =>{
    const blue = document.querySelector('.blue-light')
    blue.classList.add('flashblue')
    setTimeout(()=>{
        blue.classList.remove('flashblue')
    }, 3000)
    
  }


componentDidMount(){
    this.props.getPokemon('pikachu')
}
  render() {
    return (
      <div>
        <Pokedex 
         selectedPokemon={this.props.selectedPokemon}
         getPokemon={this.getPokemon}
         handleChanges={this.handleChanges}
         isFetchingPokemon={this.props.isFetchingPokemon}
         error={this.props.error}
         searchPoke={this.state.searchPoke}
         pokemonImg={this.props.pokemonImg}
         getPokemonById={this.getPokemonById}
         pokemonMoves={this.props.pokemonMoves}
         pokemonTypes={this.props.pokemonTypes}
         />
      </div>
    )
  }
}



const mapStateToProps = state =>( {
  selectedPokemon: state.selectedPokemon,
  isFetchingPokemon: state.isFetchingPokemon,
  error: state.error,
  pokemonImg: state.pokemonImg,
  pokemonMoves: state.pokemonMoves,
  pokemonTypes: state.pokemonTypes
})

export default connect(
    mapStateToProps,
   {
     getPokemon,
    
   }
 )(PokedexView);