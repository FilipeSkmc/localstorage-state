import React, { Component } from 'react'
import { Link } from 'react-router-dom';
/** https://fontawesome.com/v5/docs/web/use-with/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './CharacterCard.css';
import { addCharacter, removeCharacter } from '../helpers/localStorage';

export default class CharacterCard extends Component {
  state = {
    isChecked: false,
  };

  componentDidMount () {
    this.isFavorite();
  }

  isFavorite = () => {
    const { favorites, id } = this.props;
    const isFav = favorites.some((fav) => fav.id === id)
    this.setState({
      isChecked: isFav
    })
  }

  handleCheck = ({ target: { checked }}) => {
    const { name, id, updateFavorites } = this.props;
    console.log(checked);

    if (checked) {
      addCharacter({ name, id });
    } else {
      removeCharacter({ name, id });
    }

    this.setState({
      isChecked: checked,
    });
    
    updateFavorites();
  }

  render() {
    const { image, name, id } = this.props;
    const { isChecked } = this.state;

    return (
      <section className="cartoon-card">
        <img src={image} alt={name} className="cartoon-card__image" />
        <h2 className="cartoon-card__name">{name}</h2>
        <Link to={`/character/${id}`}>Details</Link>
        <label htmlFor={`fav-${id}`}>
          <input 
            type="checkbox" 
            name="favorite" 
            checked={ isChecked }
            onChange={ this.handleCheck }
            id={`fav-${id}`}
            style={ { display: 'none' } }
          />
            <FontAwesomeIcon 
              icon={ faHeart }
              style={ { color: isChecked ? 'red' : 'grey', fontSize: '25px' } }
            />
        </label>
      </section>
    )
  }
}
