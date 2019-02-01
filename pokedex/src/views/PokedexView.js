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


componentDidMount(){
    this.props.getPokemon()
}
  render() {
    return (
      <div>
        <Pokedex handleChanges={this.handleChanges}/>
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