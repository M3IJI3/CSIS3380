// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

// <Header />

// <Card />

// <App />
const Header = (props) => {
  return (
    <header>
      <h1>Playing Cards Game of {props.totalCards}</h1>
      <button onClick={() => props.shuffleCards()}>Shuffle Cards</button>
    </header>
  );
};

const Card = (props) => {
  return (
    <div className="card">
      <button className="remove-card" onClick={() => props.removeCard(props.id)}>Delete Card</button>
      <div><img src={props.url} alt={`Card ${props.id}`} /></div>
    </div>
  );
};

class App extends React.Component {
  state = {
    cards: [
      { 
        id: 1, 
        url: 'img/AC.svg' 
      },
      { 
        id: 2, 
        url: 'img/AD.svg' 
      },
      { 
        id: 3, 
        url: 'img/AH.svg' 
      },
      { 
        id: 4, 
        url: 'img/AS.svg' 
      },
      { 
        id: 5, 
        url: 'img/2C.svg' 
      },
      { 
        id: 6, 
        url: 'img/2D.svg' 
      },
      { 
        id: 7, 
        url: 'img/2H.svg' 
      },
      { 
        id: 8, 
        url: 'img/2S.svg' 
      },
      { 
        id: 9, 
        url: 'img/3C.svg' 
      },
      { 
        id: 10, 
        url: 'img/3D.svg' 
      },
      { 
        id: 11, 

        url: 'img/3H.svg' 
      },
      { 
        id: 12, 
        url: 'img/3S.svg' 
      },
      { 
        id: 13, 
        url: 'img/4C.svg' 
      },
      { 
        id: 14, 
        url: 'img/4D.svg' 
      },
      { 
        id: 15, 
        url: 'img/4H.svg' 
      },
      { 
        id: 16, 
        url: 'img/4S.svg' 
      },
      { 
        id: 17, 
        url: 'img/5C.svg' 
      },
      { 
        id: 18, 
        url: 'img/5D.svg' 
      },
      { 
        id: 19, 
        url: 'img/5H.svg' 
      },
      { 
        id: 20, 

        url: 'img/5S.svg' 
      },
      { 
        id: 21, 
        url: 'img/6C.svg' 
      },
      { 
        id: 22, 
        url: 'img/6D.svg' 
      },
      { 
        id: 23, 
        url: 'img/6H.svg' 
      },
      { 
        id: 24, 
        url: 'img/6S.svg' 
      },
      { 
        id: 25, 
        url: 'img/7C.svg' 
      },
      { 

        id: 26, 
        url: 'img/7D.svg' 
      },
      { 
        id: 27, 
        url: 'img/7H.svg' 
      },
      { 
        id: 28, 
        url: 'img/7S.svg' 
      },
      { 
        id: 29, 
        url: 'img/8C.svg' 
      },
      { 
        id: 30, 

        url: 'img/8D.svg' 
      },
      { 
        id: 31, 
        url: 'img/8H.svg' 
      },
      { 
        id: 32, 
        url: 'img/8S.svg' 
      },
      { 
        id: 33, 

        url: 'img/9C.svg' 
      },
      { 
        id: 34, 
        url: 'img/9D.svg' 
      },
      { 
        id: 35, 
        url: 'img/9H.svg' 
      },
      { 
        id: 36, 
        url: 'img/9S.svg' 
      },
      { 
        id: 37, 
        url: 'img/TC.svg' 
      },
      { 
        id: 38, 
        url: 'img/TD.svg' 
      },
      { 
        id: 39, 

        url: 'img/TH.svg' 
      },
      { 
        id: 40, 
        url: 'img/TS.svg' 
      },
      { 
        id: 41, 
        url: 'img/JC.svg' 
      },
      { 
        id: 42, 
        url: 'img/JD.svg' 
      },
      { 
        id: 43, 
        url: 'img/JH.svg' 
      },
      { 
        id: 44, 
        url: 'img/JS.svg' 
      },
      { 
        id: 45, 
        url: 'img/QC.svg' 
      },
      { 
        id: 46, 
        url: 'img/QD.svg' 
      },
      { 
        id: 47, 
        url: 'img/QH.svg' 
      },
      { 
        id: 48, 
        url: 'img/QS.svg' 
      },
      { 
        id: 49, 
        url: 'img/KC.svg' 
      },
      { 
        id: 50, 
        url: 'img/KD.svg' 
      },
      { 
        id: 51, 
        url: 'img/KH.svg' 
      },
      { 
        id: 52, 
        url: 'img/KS.svg' 
      },
    ],
    displayedCards: []
  };

  componentDidMount() {
    this.setState({ displayedCards: this.state.cards });
  }

  handleRemoveCard = (id) => {
    this.setState((prevState) => ({
      displayedCards: prevState.displayedCards.filter((card) => card.id !== id)
    }));
  };

  handleShuffleCards = () => {
    const shuffledCards = this.state.cards
      .map((card) => ({ ...card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((card) => ({ id: card.id, url: card.url }))
      .slice(0, Math.floor(Math.random() * 11));
    this.setState({ displayedCards: shuffledCards });
  };

  render() {
    return (
      <div>
        <Header 
          totalCards={this.state.displayedCards.length}
          shuffleCards={this.handleShuffleCards}
        />
        <div className="container">
         {this.state.displayedCards.map((card) =>
            <Card 
              url={card.url}
              id={card.id}
              key={card.id.toString()}
              removeCard={this.handleRemoveCard}
            />
         )}
        </div>
      </div>
    );
  }
}

// Render the container component to the DOM
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);



