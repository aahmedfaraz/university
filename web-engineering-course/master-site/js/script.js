// Added a Search Functionality

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.getElementById("search").value.trim().toLowerCase();
  if (text !== "") {
    document.querySelectorAll("span").forEach((node) => {
      if (node.innerText.trim().toLowerCase() === text) {
        node.scrollIntoView();
        setTimeout(() => {
          window.scrollBy(0, -80);
        }, 1000);
        node.classList.add("highlight");
        setTimeout(() => {
          node.classList.remove("highlight");
        }, 5000);
      }
    });
  } else {
    alert("Enter any text");
  }
  document.getElementById("search").value = "";
});
