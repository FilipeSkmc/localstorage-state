import React, { Component } from 'react';
import './CharacterCard.css';
import { fetchCharacterDetails } from '../helpers';
import Loading from './Loading';
import "../pages/Menu.css";

class CharacterDetails extends Component {
  state = {
    loading: true,
    character: null,
  };

  componentDidMount() {
    console.log(this.props)
    const { match: { params: { id } } } = this.props;
    fetchCharacterDetails(id)
      .then((character) => {
        console.log(character);
        this.setState({ character, loading: false })})
      .catch(err => console.error(err));
  }

  render() {
    const { character, loading } = this.state;

    if (loading) return <div className="menu"><Loading /></div>;

    return (
      <div className="cartoon-card__container">
        { character && (
          <div className="cartoon-card">
            <img src={character.image} alt={character.name} className="cartoon-card__image" />
            <h2 className="cartoon-card__name">{character.name}</h2>
            <p className="cartoon-card__gender">Gender: {character.gender}</p>
            <p className="cartoon-card__hair-color">Hair Color: {character.hairColor}</p>
            <p className="cartoon-card__occupation">Occupation: {character.occupation}</p>
            <p className="cartoon-card__first-episode">First Episode: {character.firstEpisode}</p>
            { character.relatives.length > 0 && ( <h3>Realtives</h3> ) }
            { character.relatives.map((relative, index) => (
              <p key={ index } className="cartoon-card__relatives">{ relative.name }</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
