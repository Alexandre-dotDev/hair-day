import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data.
const selectedDate = document.querySelector("#date");
// console.log(selectedDate);

export async function schedulesDay() {
  //Obtém a data do input.
  const date = selectedDate.value;

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //Renderiza as horas dísponiveis.
  hoursLoad({ date });

  //Buscar na API os agendamentos para carregar do lado direito da tela.

  //OS horários disponíveis (horário futuro + não agendados) do lado esquerdo (form).
}
