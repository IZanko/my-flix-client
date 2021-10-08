import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";



import "./movie-card.scss"

export class MovieCard extends React.Component {



  render() {
    const { movie } = this.props;
    const imageUrl = `images/${movie.ImagePath}`;


    return (
      <Card >
        <Link to={`/movies/${movie._id}`}>
          <Button variant="link">
            <Card.Img variant="top" src={imageUrl} className="image-styles" />
          </Button>
        </Link>
      </Card >

    );
  }
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.object.isRequired,
    Director: PropTypes.object.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
};