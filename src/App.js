import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import images from "./images.json";


class App extends Component {


  state = {
    guessArray: [],
    message: "Click a birb to begin.",
    score: 0, 
    topScore: 0,


  };

  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;

    if (guessArray[card.id]) {
      this.setState({
        message: "You have selected a preselected birb. Start over.",
        topScore: Math.max(this.state.score, this.state.topScore),
        guessArray: [],
        score: 0,

      })
    } 
    else {
      guessArray[card.id] = true;
      this.setState({
        message: "Well...ok.",
        guessArray: guessArray,
        score: ++score,

      })
    }
  };

  render() {
    return (

    <div className="page">
        <Header
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore} />
        <Wrapper>
          { images
            .sort((a, b) => 0.5 - Math.random())
            .map( randomCard => (
              <ImageCard 
               clickCard={this.clickCard}
               id={randomCard.id}
               key={randomCard.id}
              image={randomCard.image}  />
            ))
           }
        </Wrapper>
    </div>    
    )
  }     

}

export default App;
