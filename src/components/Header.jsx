import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();
    const dateElement = document.getElementById("date");
    if (dateElement) {
      dateElement.textContent = today.toLocaleDateString("en-US", options);
    }
  }, []);

  return (
    <header>
      <h1>
        <i className="fa fa-check-circle"></i>
        My Tasks
      </h1>
      <p id="date"></p>
    </header>
  );
}
