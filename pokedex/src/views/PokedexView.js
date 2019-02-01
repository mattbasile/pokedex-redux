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
    console.log('searching')
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
        <Pokedex selectedPokemon={this.props.selectedPokemon} getPokemon={this.getPokemon} handleChanges={this.handleChanges}/>
      </div>
    )
  }
}



const mapStateToProps = state =>( {
  selectedPokemon: state.selectedPokemon
})

export default connect(
    mapStateToProps,
   {
     getPokemon
   }
 )(PokedexView);