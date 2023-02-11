let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

onload = () => {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", onLine);
window.addEventListener("offline", offLine);

function onLine() {
  title.innerHTML = "Online Now ";
  title.classList.add("styleHeader");
  ul.classList.add("hide");
  reload.classList.add("hide");
}
function offLine() {
  title.innerHTML = "Offline Now ";
  title.style.color = "#999";
  title.classList.remove("styleHeader");
  ul.style.color = "#777";
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}

reload.addEventListener("click", () => location.reload());
