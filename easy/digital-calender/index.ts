document.addEventListener("DOMContentLoaded", function (): void {
  const monthDOM = document.getElementById(
    "month-name"
  ) as HTMLParagraphElement;
  const dayDOM = document.getElementById("day-name") as HTMLParagraphElement;
  const dateDOM = document.getElementById("day-number") as HTMLParagraphElement;
  const yearDOM = document.getElementById("year") as HTMLParagraphElement;

  const date: Date = new Date();

  monthDOM.textContent = date.toLocaleString("en", {
    month: "long",
  });

  dayDOM.textContent = date.toLocaleString("en", {
    weekday: "long",
  });

  dateDOM.textContent = String(date.getDate());
  yearDOM.textContent = String(date.getFullYear());
});
