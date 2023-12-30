let titulo = document.querySelector ('h1');
titulo.innerHTML = ('Hora do Desafio');

function verificarConsole () {
    console.log ('O botão foi clicado')
}

function mensagemAlerta () {
        alert("estudo javascript")
}

function verificarCidade () {
         var cidade = prompt("Diga o nome da sua cidade natal: ");
        alert (`Estive em  ${cidade}  e lembrei de você` );
    
 
}

function realizarSoma () {


        var num1 = parseInt(prompt('Diga um número: '));
        var num2 = parseInt(prompt('Diga outro número: '));
        var totalSoma = num1 + num2;
    
        alert (`A soma de ${num1} + ${num2} é = ${totalSoma}` );
    

    
}