import dayjs from "dayjs";  

// Seleciona os itens lá no HTML
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Carrega a data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("enviado");
}