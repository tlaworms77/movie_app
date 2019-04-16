import React/*, { Component }*/ from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

//class component
/*class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}*/

// functional component
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className='Movie'>
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) =>
                        <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        baseOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}

function MovieGenre({genre}) {
   return (
       <span className="Movie_Genre">{genre} </span>
   );
}

// use dumb component instead of class component or smart component
// functional component -> not state, not exist any lifecycle -> only exist return...
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    );
}

// PropType inspect
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;