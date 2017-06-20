var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {        
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {        
        paciente.querySelector(".info-imc").textContent = "Altura inválida";        
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){    
        paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);     
    }
    
}

function calculaImc(peso,altura){
     var imc = peso / (altura * altura);
     
     return imc.toFixed(2);
 }

function validaAltura(altura){
    if (altura > 3.00 || altura <= 0.00) {
        return false;
    } else {
        return true;
    }
}

function validaPeso(peso){
    if (peso > 1000 || peso <= 0){
        return false;
    } else {
        return true;
    }
}                                      