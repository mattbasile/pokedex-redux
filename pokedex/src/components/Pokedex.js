import React, { Component } from 'react'

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        { this.props.error ? (<h1>That Pokemon is {this.props.error.response.data}</h1>) :
            this.props.isFetchingPokemon ? (<h1>Gotta Catch Em All </h1>): (<h1>{this.props.selectedPokemon.name}</h1>) }
        <form onSubmit={this.props.getPokemon}>
            <input onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
        </form>
      </div>
    )
  }
}
