const inputText = document.querySelector("#text");
const show = document.querySelector("#show");

inputText.addEventListener("input", () => {
  const text = inputText.value.trim();
  const word = text.split(/\s+/).filter((word) => word.length > 0);

  show.innerHTML = "Word Count " + word.length;
});
