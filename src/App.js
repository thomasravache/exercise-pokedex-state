import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeIndex: 0,
    }
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    if(this.state.pokeIndex >= pokemons.length-1) {
      this.setState({
        pokeIndex: 0,
      });
    } else {
      this.setState((prevState, _props) => ({
        pokeIndex: prevState.pokeIndex + 1,
      }));
    }
  }

  render() {
    const { pokeIndex } = this.state;

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} pokeIndex={ pokeIndex } />
        <button onClick={ this.handlerClick }>Pokemon {pokeIndex+1}</button>
      </div>
    );
  }
}

export default App;