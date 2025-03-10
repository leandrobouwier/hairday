import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";


// Seleciona o input de data 
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    //Exibe os agendamentos
    schedulesShow({ dailySchedules })

    console.log(dailySchedules);
    // renderiza as horas disponiveis
    hoursLoad({ date });
}