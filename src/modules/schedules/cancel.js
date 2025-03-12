import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) =>{
    //captura o evento de clique na lista
    period.addEventListener("click", async (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a li pai do elemento clicado
            const item = event.target.closest("li")

            // Pega o Id do agendamento para remover
            const { id } = item.dataset
            
            // Confirma que o id foi selecionado
            if(id){
                // Confirma se o user quer remover ou cancelar
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    // Faz requisição na api pra cancelar
                    await scheduleCancel ({ id })
    
                    // Recarrega os agendamentos
                    schedulesDay();
                }
            }
            
        }
    })
})