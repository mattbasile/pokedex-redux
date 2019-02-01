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
        [e.target.name]: e.target.value
    })
}
getPokemon = e =>{
    e.preventDefault();
    this.props.getPokemon(this.state.searchPoke);
    this.setState({searchPoke: '',})
    e.target.reset();
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
         searchPoke={this.state.searchPoke}/>
         
      </div>
    )
  }
}



const mapStateToProps = state =>( {
  selectedPokemon: state.selectedPokemon,
  isFetchingPokemon: state.isFetchingPokemon,
  error: state.error
})

export default connect(
    mapStateToProps,
   {
     getPokemon
   }
 )(PokedexView);