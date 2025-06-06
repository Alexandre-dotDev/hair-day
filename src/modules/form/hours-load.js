import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({ date, dailySchedules }) {
  //Limpa a lista de horários.
  hours.innerHTML = "";

  //Obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );
  // console.log(unavailableHours);

  const opening = openingHours.map((hour) => {
    //Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    //Avalia se horário na agenda está no passado.
    const available = !unavailableHours.includes(hour) && !isHourPast;

    // console.log({ hour, available });

    return {
      hour,
      available,
    };
  });

  //Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    switch (hour) {
      case "09:00":
        hourHeaderAdd("Manhã");
        break;
      case "13:00":
        hourHeaderAdd("Tarde");
        break;
      case "18:00":
        hourHeaderAdd("Noite");
        break;
    }

    hours.append(li);
  });

  //Adciona o evento de clique nos horários disponíveis.
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
