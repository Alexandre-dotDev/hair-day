import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data.
const selectedDate = document.querySelector("#date");
// console.log(selectedDate);

export function schedulesDay() {
  //Obtém a data do input.
  const date = selectedDate.value;
  //Renderiza as horas dísponiveis.
  hoursLoad({ date });

  //Buscar na API os agendamentos para carregar do lado direito da tela.

  //OS horários disponíveis (horário futuro + não agendados) do lado esquerdo (form).
}
