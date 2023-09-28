function cadastrar(){

var nomescad = document.getElementById('nomes').value;
var senhacad = document.getElementById('senha').value;


console.log(JSON.stringify({
    nomescad: nomescad,
    senhacad: senhacad
}));

fetch('/cadastro',{
    method: 'POST',
    body: JSON.stringify({
        nomescad: nomescad,
        senhacad: senhacad
    }), 
    headers: {'Content-Type': 'application/json'},
})

.then(async (resp) =>{
    console.log('Usuário cadastrado')
})
}