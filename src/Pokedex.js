import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          pokeIndex: 0,
          typeOfPokemon: 'All',
        }
        this.nextPokemonClick = this.nextPokemonClick.bind(this);
        this.filteredPokemons = this.filteredPokemons.bind(this);
        this.changeState = this.changeState.bind(this);
        this.getTypesOfPokemons = this.getTypesOfPokemons.bind(this);
      }

    filteredPokemons(typeOfPokemon) {
        if(typeOfPokemon === 'All') return this.props.pokemons;

        return this.props.pokemons
            .filter((pokemon) => pokemon.type === typeOfPokemon);
    }

    changeState(event) {
        this.setState({
            pokeIndex: 0,
            typeOfPokemon: event.target.innerText,
        })
    }

    getTypesOfPokemons() {
        const allTypes = this.props.pokemons
            .map((pokemon) => pokemon.type);
        return [...new Set(allTypes)]; // removendo tipos repetidos
    }

    nextPokemonClick() {
        const { pokeIndex, typeOfPokemon } = this.state;

        if(pokeIndex >= this.filteredPokemons(typeOfPokemon).length-1) {
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
        const { pokeIndex, typeOfPokemon } = this.state;
        const pokemon = this.filteredPokemons(typeOfPokemon)[pokeIndex];
        const typeOfPokemons = this.getTypesOfPokemons();

        return (
            <div className="pokedex">
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                <Pokemon pokemon={ pokemon } />
                <div>
                    { typeOfPokemons.map((type) => <button key={ type } onClick={ this.changeState }>{ type }</button>) }
                    <button onClick={ this.nextPokemonClick }>Próximo Pokémon</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;