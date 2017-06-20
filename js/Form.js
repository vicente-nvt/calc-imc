var btnAddPaciente = document.querySelector("#adicionar-paciente");

btnAddPaciente.addEventListener("click", function(event){
    event.preventDefault();
        
    var form = document.querySelector("#form-adiciona");    
    var tabela = document.querySelector("#tabela-pacientes");

    
    var Erros = validaPaciente(capturaInfoPacientedoFormulario(form));
    
    if (Erros.length > 0) {
        exibeMensagemErro(Erros);
        return;
    }
    
    adicionaPacienteNaTabela(capturaInfoPacientedoFormulario(form));
    
    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
    
})

function adicionaPacienteNaTabela(paciente){
    var trPaciente = criaTr(paciente);
    tabela.appendChild(trPaciente);
}

function exibeMensagemErro(erros){
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);   
    })
}

function capturaInfoPacientedoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function criaTd(valor, classe){
    var Td = document.createElement("td");
    Td.textContent = valor;
    Td.classList.add(classe);
    
    return Td;
}

function criaTr(paciente){
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
        
    trPaciente.appendChild(criaTd(paciente.nome,"info-nome"));
    trPaciente.appendChild(criaTd(paciente.peso,"info-peso"));
    trPaciente.appendChild(criaTd(paciente.altura,"info-altura"));
    trPaciente.appendChild(criaTd(paciente.gordura,"info-gordura"));
    trPaciente.appendChild(criaTd(paciente.imc,"info-imc"));

    return trPaciente;
}

function validaPaciente (paciente){
    var Erros = [];
    
    if (paciente.peso.length == 0) 
        Erros.push("Peso não pode ser vazio");
    else if (!validaPeso(paciente.peso))
        Erros.push("Peso inválido");
    
    if (paciente.altura.length == 0) 
        Erros.push("Altura não pode ser vazia");
    else if (!validaPeso(paciente.peso))
        Erros.push("Altura Inválida");
        
    if (paciente.nome.length == 0) 
        Erros.push("Nome não pode ser vazio");
    
    if (paciente.gordura.length == 0) 
        Erros.push("Gordura não pode ser vazia");
    
    return Erros;    
}
