import React, { Component } from 'react';
import './App.css';

const StarWarsChars = props => {
  return (
    <div className="char-info">
      <div className="char-card">
          <h2>{props.charsProp.name} </h2> 
        <p>
          <strong>Birth Year:</strong> {props.charsProp.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {props.charsProp.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.charsProp.height}
        </p>
        <p>
          <strong>Mass:</strong> {props.charsProp.mass}
        </p>
        <p>
          <strong>Eye Color:</strong> {props.charsProp.eye_color}
        </p>
        <p>
          <strong>Hair Color:</strong> {props.charsProp.hair_color}
        </p>
        <p>
          <strong>Skin Color:</strong> {props.charsProp.skin_color}
        </p>
      </div>
    </div>
  );
};


class App extends Component {
  constructor() {
    super();

    this.state = {
      starwarsChars: [],
      character: {
        name: "",
        birth_year: "",
        gender: "",
        height: "",
        mass: "",
        eye_color: "",
        hair_color: "",
        skin_color: "",
      }
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="char-list">
          {this.state.starwarsChars.map(charsFromMap => {
            return <StarWarsChars charsProp={charsFromMap} />
          })}
        </div>
      </div>
    );
  }
}

export default App;

