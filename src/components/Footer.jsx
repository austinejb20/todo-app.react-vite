export default function Footer({ itemsLeft, onClearCompleted }) {
  return (
    <footer>
      <p id="items-left">{itemsLeft}</p>
      <button id="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
