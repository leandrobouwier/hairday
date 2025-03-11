const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) =>{
    //captura o evento de clique na lista
    period.addEventListener("click", (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset
            
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
            }

            if(isConfirm){
                console.log("Remover")
            }
        }
    })
})