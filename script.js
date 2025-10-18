// TESTDATO (fjern/kommentér når det er "rigtigt")
const testDate = new Date("2025-12-24");

function getToday() {
  return testDate ? testDate : new Date();
}

document.querySelectorAll(".door").forEach(door => {
  door.addEventListener("click", () => {
    const day = parseInt(door.getAttribute("data-day"));
    const today = getToday().getDate();
    const month = getToday().getMonth() + 1;

    if (month === 12 && today >= day) {
      // Toggle åbnet/lukket
      door.classList.toggle("open");
      door.classList.toggle("closed");
    } else {
      alert("For tidligt! Vent til " + day + ". december 🎄");
    }
  });
});
