const buttonTheme = document.getElementById('buttonTheme');
const checkboxTheme = document.getElementById('theme');


const colors = ["brown", "blue", "green"];
let currentColorIndex = 0;

function theme() {
    // Verifica se a caixa de seleção está marcada
    if (checkboxTheme.checked) {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        buttonTheme.style.backgroundColor = colors[currentColorIndex];
    } else {
        buttonTheme.style.backgroundColor = ""; // Ou defina a cor padrão aqui
    }
}

function criaCalculadora(){
    return{
        inputDisplay: document.querySelector('#display'),
        buttons: document.querySelectorAll('.btn'),
        inicia(){

        },
        display(valor){
            this.inputDisplay.innerHTML = valor
        },
        
    }
}

