import dayjs from "dayjs";
import { openingHours} from "../../utils/opening-hours"

const hours = document.getElementById("hours")

export function hoursLoad({ date }){
    const opening = openingHours.map((hour)=>{
        // recupera somente a hora e limpa com split
        const [scheduleHour] = hour.split(":");
        
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
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
}


function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}