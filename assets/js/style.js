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

function Calculadora(){
    this.display = document.querySelector('#display');
    
    this.inicia = () => {
        this.capituraCliques();
        this.capituraEnter();
    };

    this.capituraEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    };
    this.capituraCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btnNumber')) this.addNumDisplay(el);
            if(el.classList.contains('btnReset')) this.reset();
            if(el.classList.contains('btnDel')) this.del();
            if(el.classList.contains('btnEq')) this.realizaConta();
        });
    }
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.reset = () => this.display.value = "";
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('conta inválida')
                return;
            }
            this.display.value = conta;
        } catch(e){
            alert('conta inválida');
            return
        }
    }
    
}

const calculadora = new Calculadora();
calculadora.inicia();

