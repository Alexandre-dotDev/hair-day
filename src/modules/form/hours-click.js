export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    //Verifica qual horário foi clicado.
    available.addEventListener("click", (selected) => {
      //Remove a classe hour-selected de todas as li não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      //Adiciona a classe na li clicada.
      selected.target.classList.add("hour-selected");
    });
  });
}
