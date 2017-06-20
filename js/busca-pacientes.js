var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        
        var erroAjax = document.querySelector(".erro-ajax");
        
        console.log(erroAjax);
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })            
        } else {
            console.log("Falha ao adicionar pacientes");
            erroAjax.classList.remove("invisivel");            
        }
        
        
    })
    
    xhr.send();
})