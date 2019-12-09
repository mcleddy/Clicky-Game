import React, { Component } from 'react';
import card from "./components/card";
import wrapper from "./components/wrapper";
import header from "./components/header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  //determines when game ends
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(cars => {
      card.count = 0;
    });
    alert("Game Over! Your Score is  :( \nscore: ${this.state.score}");
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log("score" + this.state.score);
          });
          this.state.cards(() => Math.random() - .5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <wrapper>
        <header score={this.state.score} highscore={this.state.highscore}>Game</header>
        {this.state.cards.map(card => (
          <card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </wrapper>
    );
  }
}

export default App;
