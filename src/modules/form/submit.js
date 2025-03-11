import dayjs from "dayjs";  

import { scheduleNew } from "../../services/scedule-new"
import { schedulesDay } from "../schedules/load.js"

// Seleciona os itens lá no HTML
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");



// Carrega a data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    event.preventDefault()
    
    try{
        // Recuperando o nome do cliente
        const name = clientName.value.trim()
        if(!name) {
            return alert("Informe o nome do Cliente");
        }
        
        // Recuperando o horario selecionado
        const hourSelected = document.querySelector(".hour-selected");
        if(!hourSelected) {
            return alert("Selecione a hora");
        }

        // Recuperando somente a hora 
        const [hour] = hourSelected.innerText.split(":");
        
        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "Hour")

        // Gera um ID
        const id = new Date().getTime();

        // Faz agendamento
        await scheduleNew({
            id,
            name,
            when
        })

        // Recarrega os agendamentos
        await schedulesDay()

        // Limpa o input dps que recarrega o agendamento
        clientName.value = ""

    } catch(error){
        alert("Não foi possível realiza o agendamento");
        console.log(error);
    }
}