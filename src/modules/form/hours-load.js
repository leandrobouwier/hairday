import dayjs from "dayjs";
import { openingHours} from "../../utils/opening-hours"
import { hoursClick} from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }){
    hours.innerHTML = "";

    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("HH:mm")
    )

    //obtem a lista de todos os horarios ocupados.
    const opening = openingHours.map((hour)=>{
        // recupera somente a hora e limpa com split
        const [scheduleHour] = hour.split(":");
        
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour,
            available
        }
    })

    // Renderiza os horários
    opening.forEach(({hour, available}) =>{
        const li = document.createElement("li");
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;

        if(hour === "09:00") {
            hourHeaderAdd("Manhã")
        }else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li);
        
    })

    // Adiciona o evento de clique nos horários disponiveis 
    hoursClick()
}


function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}