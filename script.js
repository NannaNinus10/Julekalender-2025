// TESTDATO (fjern/kommentér denne linje når det er "rigtigt")
const testDate = new Date("2025-12-24");

function getToday() {
  return testDate ? testDate : new Date();
}

// Tilføj klik på hver låge
document.querySelectorAll(".door").forEach(door => {
  door.addEventListener("click", () => {
    const day = parseInt(door.getAttribute("data-day"));
    const today = getToday().getDate();
    const month = getToday().getMonth() + 1;

    if (month === 12 && today >= day) {
      // toggle låge åben/lukket
      if (door.classList.contains("open")) {
        door.classList.remove("open");
        door.classList.add("closed");
      } else {
        door.classList.remove("closed");
        door.classList.add("open");
      }
    } else {
      alert("For tidligt! Vent til " + day + ". december 🎄");
    }
  });
});
