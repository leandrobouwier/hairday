import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data 
const selectedDate = document.getElementById("date")

export function schedulesDay(){
    const date = selectedDate.value

    // renderiza as horas disponiveis
    hoursLoad({ date });
}