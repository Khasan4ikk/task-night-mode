//находим кнопку

const nightModebtn = document.querySelector(".night-mode-btn");

nightModebtn.addEventListener("click", changeBackground);

function changeBackground(event) {
  // Toggle night
  document.body.classList.toggle("night");

  // Изменение текста кнопки
  if (document.body.classList.contains("night")) {
    nightModebtn.textContent = "Выключить ночной режим";
  } else {
    nightModebtn.textContent = "Включить ночной режим";
  }
}
