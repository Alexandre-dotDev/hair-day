import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";

const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

// Data atual para formatar  o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima com sendo a data atual.
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
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Gera um ID
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
});
