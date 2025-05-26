//Seleciona o input de data.
import { schedulesDay } from "../schedules/load";
const selectedDate = document.querySelector("#date");

//Recarrega a lista de horários quando o input de data mudar.
// selectedDate.onchange = () => schedulesDay();

selectedDate.addEventListener("change", () => {
  schedulesDay();
});
