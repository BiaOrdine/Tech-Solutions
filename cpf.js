function buscar(){
    fetch('https://raw.githubusercontent.com/BiaOrdine/RAWs-techsolutions/refs/heads/main/cpf.json').then(resposta => resposta.json()).then(corpo =>{
        var identificador = document.getElementById('valor').value
        var encontrado = false;

        corpo.forEach(pessoa =>{
            if(identificador == pessoa.cpf){
            
                document.getElementById("nome").innerHTML = pessoa.nome;
                document.getElementById("nascimento").innerHTML = pessoa.nascimento;
                document.getElementById("estado").innerHTML = pessoa.estado;
                document.getElementById("cidade").innerHTML = pessoa.cidade;
                document.getElementById("pais").innerHTML = pessoa.pais;

                document.getElementById("erro").innerHTML = '';
                encontrado = true;
            }
        })
        if(!encontrado){
            document.getElementById("erro").innerHTML = 'Registro Invalido';
        }
    })
}