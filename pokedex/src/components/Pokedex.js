import React, { Component } from 'react'

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
      </div>
    )
  }
}
