var InputFiltro = document.querySelector("#input-filtro");

InputFiltro.addEventListener("input", function (){                            
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var Nome = pacientes[i].querySelector(".info-nome").textContent;
            
            var expressao = RegExp(this.value,"i");
            if (!expressao.test(Nome))
                pacientes[i].classList.add("invisivel");
            else
                pacientes[i].classList.remove("invisivel");
        }        
    } else {
        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome").textContent;
            paciente.classList.remove("invisivel");
        });                          
    }
})