import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="x" />
          <Player initialName="Player 2" symbol="o" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
