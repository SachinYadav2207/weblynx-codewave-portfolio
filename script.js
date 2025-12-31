function send() {
  alert("Message sent successfully!");
}

function darkMode() {
  document.body.classList.toggle("dark");
}

window.onload = function () {
  let p = 0;
  let c = 0;

  let counter = setInterval(() => {
    if (p < 50) {
      p++;
      document.getElementById("projects").innerText = p;
    }
    if (c < 30) {
      c++;
      document.getElementById("clients").innerText = c;
    }
    if (p === 50 && c === 30) {
      clearInterval(counter);
    }
  }, 50);
};
