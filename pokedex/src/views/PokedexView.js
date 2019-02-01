import React, { Component } from 'react'
import Pokedex from '../components/Pokedex';
import {connect} from 'react-redux';
import {getPokemon} from '../actions'


class PokedexView extends Component {
componentDidMount(){
    this.props.getPokemon()
}
  render() {
    return (
      <div>
        <Pokedex/>
      </div>
    )
  }
}



const mapStateToProps = state =>( {
  pokemon: state.pokemon
})

export default connect(
    mapStateToProps,
   {
     getPokemon
   }
 )(PokedexView);