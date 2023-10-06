export default function Board() {
  // Definimos una matriz 2D para representar los botones
  const buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((number) => (
            <button key={number} className="square">
              🎃
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
