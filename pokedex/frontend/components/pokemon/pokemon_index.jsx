import React from 'react';

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon()
    }

    render() {
        return (
            <ul>
                {
                    this.props.pokemon.map(poke => {
                        return (
                            <li key={poke.id}>
                                <h2>{poke.id}</h2>
                                <br/>
                                <img src={poke.image_url} alt={poke.name}/>
                                <br/>
                                <h1>{poke.name}</h1>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}