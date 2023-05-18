import React, { Component } from 'react';
import { baseURL } from '../utils/types';
import Loading from '../components/Loading';
import CharacterCard from '../components/CharacterCard';
import './Menu.css';
import { getFavoriteCharacters } from '../helpers/localStorage';

export default class Menu extends Component {
  state = {
    loading: true,
    characters: [],
    favorites: [],
  };

  
  componentDidMount() {    
    fetch(`${baseURL}/?limit=10&skip=387`)
    .then((response) => response.json())
    .then((characters) => this.setState({ characters, loading: false }))
    .catch(err => console.error(err));

    this.getFavorites();
  }

  getFavorites = () => {
    const local = getFavoriteCharacters();
    this.setState({
      favorites: local
    });
  }
  
  render() {
    const { loading, characters, favorites } = this.state;
    if (loading) return <div className="menu"><Loading /></div>;

    return (
      <div className="menu-container">
       { characters.map((character) => (
          <CharacterCard
            key={ character.id }
            image={ character.image }
            favorites={ favorites }
            updateFavorites={ this.getFavorites }
            name={ character.name }
            id={ character.id }
          />
        ))}
      </div>
    );
  }
}
