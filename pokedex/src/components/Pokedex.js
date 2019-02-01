import React, { Component } from 'react'
import PikaGif from '../pika.gif'

export default class Pokedex extends Component {
  render() {
    console.log(this.props.pokemonImg)
    return (
      <div>
        {/* { this.props.error ? (<h1>That Pokemon is {this.props.error.response.data}</h1>) :
            this.props.isFetchingPokemon ? (<h1>Gotta Catch Em All </h1>): (<h1>{this.props.selectedPokemon.name}</h1>) }
        <form onSubmit={this.props.getPokemon}>
            <input onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
        </form>
        {this.props.error ? (<img src={PikaGif}/>) : (<img src={this.props.pokemonImg}/>)}
        */}

        <div className="pokedex-container">
          <div className="left-pokedex-container bg-red-light">
            <div className="poke-light-container">
              <div className="box-1">
                <div className="blue-light bg-blue-light ">
                </div>
                <div className="three-lights w-1/2">
                  <div className="light bg-red w-1/3"></div>
                  <div className="light bg-yellow w-1/3"></div>
                  <div className="light bg-green w-1/3"></div>
                </div>
              </div>
              <div className="box-2"></div>
              <div className="box-3"></div>
            </div>
            
          </div>
          <div className="divider">
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
          </div>
          <div className="right-pokedex-container">
          <div className="right-light-cutout ">
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </div>
             
        </div>
        </div>
      </div>
    )
  }
}
