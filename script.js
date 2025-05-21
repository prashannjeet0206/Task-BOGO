const offerBoxes = document.querySelectorAll(".offer-box");
const form = document.getElementById("offerForm");
const total = document.getElementById("total");

const prices = {
  1: 10,
  2: 18,
  3: 24,
};

form.addEventListener("change", () => {
  const selectedValue = form.unit.value;

  // Update total
  total.textContent = `Total: $${prices[selectedValue]} USD`;

  // Toggle expansion
  offerBoxes.forEach((box) => {
    if (box.dataset.value === selectedValue) {
      box.classList.add("expanded");
    } else {
      box.classList.remove("expanded");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`${form.unit.value} unit(s) added to cart at ${total.textContent}`);
});
