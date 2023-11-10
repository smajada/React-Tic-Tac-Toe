import Square from "./Square";

export default function WinnerModal({ winner, handleRestart }) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Tie" : `Won:`;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square value={winner} />}</header>

        <footer>
          <button onClick={handleRestart} className="restart">
            Restart Game
          </button>
        </footer>
      </div>
    </section>
  );
}
