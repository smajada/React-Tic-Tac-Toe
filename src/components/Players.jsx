import "../App.css"

export default function Player({p1IsNext}) {

  const p1SpanClassName = p1IsNext ? 'p1IsNextTrue' : 'p1IsNextFalse';
  const p2SpanClassName = p1IsNext ? 'p2IsNextFalse' : 'p2IsNextTrue';

  return <footer >
  <h1>Who's next?</h1>
  <div>
  <span className={p1SpanClassName}>🎃</span>
  <span className={p2SpanClassName}>👻</span>
  </div>
  </footer>
}
