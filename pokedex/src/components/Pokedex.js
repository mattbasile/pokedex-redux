import React, { Component } from 'react'

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        {this.props.selectedPokemon ? (<h1>{this.props.selectedPokemon.name}</h1>) : (<h1>Gotta Catch Em All </h1>)}
        <form onSubmit={this.props.getPokemon}>
            <input onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
        </form>
      </div>
    )
  }
}
