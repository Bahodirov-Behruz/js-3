let toggle = document.getElementById("toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  document.body.classList.toggle("dark-theme");
};
