import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load.js";
const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

// Data atual para formatar  o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    //Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (name === "") {
      return alert("Informe o nome do cliente");
    }

    //Recupera o horário selecionado.
    const hoursSelected = document.querySelector(".hour-selected");

    if (!hoursSelected) {
      return alert("Selecione um horário");
    }

    //Recupera somente a hora.
    const [hour] = hoursSelected.innerText.split(":");

    //Insere a hora na data
    const when = dayjs(selectedDate.value)
      .add(hour, "hour")
      .format("YYYY-MM-DD HH:mm:ss [GMT]Z");

    //Gera um ID
    const id = new Date().getTime().toString();

    //Faz o agendamento.
    await scheduleNew({
      id,
      name,
      when,
    });

    //Recarrega os agendamentos
    await schedulesDay();

    //Limpa o input de nome do cliente.
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
});
