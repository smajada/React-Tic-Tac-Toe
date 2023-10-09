import "../App.css";

export default function Header({ handleRestart}) {
  return (
    <header>
      <h1>Halloween Tic Tac Toe</h1>
      <button
        onClick={handleRestart}
        className="restart"
      >
        Restart Game
      </button>
    </header>
  );
}
