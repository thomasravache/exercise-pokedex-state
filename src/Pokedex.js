import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokeIndex, pokemons }  = this.props;

        return (
            <div className="pokedex">
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                <Pokemon pokemon={pokemons[pokeIndex]} />
            </div>
        );
    }
}

export default Pokedex;