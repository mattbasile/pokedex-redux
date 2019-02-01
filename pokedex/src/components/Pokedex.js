import React, { Component } from 'react'
import PikaGif from '../pika.gif'

export default class Pokedex extends Component {
  render() {
    console.log(this.props.pokemonImg)
    return (
      <div>
        { this.props.error ? (<h1>That Pokemon is {this.props.error.response.data}</h1>) :
            this.props.isFetchingPokemon ? (<h1>Gotta Catch Em All </h1>): (<h1>{this.props.selectedPokemon.name}</h1>) }
        <form onSubmit={this.props.getPokemon}>
            <input onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
        </form>
        {this.props.error ? (<img src={PikaGif}/>) : (<img src={this.props.pokemonImg}/>)}
       

        <div className="flex bg-red w-4/5 mx-auto h-screen border border-8 border-red">
          <div className="bg-red w-1/2 h-full flex flex-col border border-blue">
            <div className="header-poke"></div>
            <div className="h-12 w-full border border-purple"></div>
            <div className="h-12 w-full border border-purple"></div>
            
          </div>
          <div className=""></div>
        </div>

      </div>
    )
  }
}
