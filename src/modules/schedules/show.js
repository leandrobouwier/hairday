import dayjs from "dayjs";

//Seleciona as sessoes manhã, tarde e noite

const periodoMorning = document.getElementById("period-morning");
const periodoAfternoon = document.getElementById("period-afternoon");
const periodoNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }){
    try {

        //Limpa as listas
        periodoMorning.innerHTML = ""
        periodoAfternoon.innerHTML = ""
        periodoNight.innerHTML = ""

        // Renderiza os agendamentos por periodo

        dailySchedules.forEach(schedule => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //Adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            // cria icone de cancelar o agendamento

            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            //Adiciona o tempo, nome e icone no item
            item.append(time, name, cancelIcon)

            //Obtem somente a hora
            const hour = dayjs(schedule.when).hour()

            //Renderiza o agendamento na secao manhã, tarde ou noite
            if(hour <= 12){
                periodoMorning.appendChild(item)
            } else if(hour > 12 && hour <= 18){
                periodoAfternoon.appendChild(item)
            } else {
                periodoNight.appendChild(item);
            }
        });

    } catch(error){
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}
