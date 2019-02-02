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
colorChange = () =>{

    const blue = document.querySelector('.blue-light');
    this.props.isFetchingPokemon ? 
    setInterval( () =>
        blue.classList.add('bg-blue-darkest')
    , 100) :
    blue.classList.remove('bg-blue-darkest')
    
  }


componentDidMount(){
    this.colorChange()
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

         />
      </div>
    )
  }
}



const mapStateToProps = state =>( {
  selectedPokemon: state.selectedPokemon,
  isFetchingPokemon: state.isFetchingPokemon,
  error: state.error,
  pokemonImg: state.pokemonImg
})

export default connect(
    mapStateToProps,
   {
     getPokemon
   }
 )(PokedexView);