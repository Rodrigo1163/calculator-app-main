const buttonTheme = document.getElementById('buttonTheme');
const checkboxThemeTwe = document.getElementById('themeTwe');

let header = document.querySelector('header')
let display = document.querySelector('.display')
let displayInput = document.querySelector('#display')
let toggle = document.querySelector('.tecla')
let btnDel = document.querySelector('.btnDel')
let btnReset = document.querySelector('.btnReset')
let btnEq = document.querySelector('.btnEq')
let btn = document.querySelectorAll('.btnNumber');
let title = document.querySelector(".theme")

const two = document.querySelector('.button-twe');
two.addEventListener('click', () => {
    var body = document.querySelector('body');
    body.classList.toggle("transicao");
    body.style.backgroundColor = "hsl(0, 0%, 90%)"
    header.style.backgroundColor = "var(--backgroundBodyTwe)"
    header.style.color = "black"
    header.classList.toggle("transicao");
    display.style.backgroundColor = "hsl(0, 0%, 90%)"
    displayInput.style.backgroundColor = "white"
    display.classList.toggle("transicao");
    displayInput.style.color = "black"
    displayInput.classList.toggle("transicao");
    toggle.style.backgroundColor = "hsl(0, 5%, 81%)"
    toggle.classList.toggle("transicao");
    btnDel.style.backgroundColor = "hsl(185, 42%, 37%)"
    btnDel.style.color = "white"
    btnDel.style.borderBottom = "3px solid hsl(185, 58%, 25%)"
    btnDel.classList.toggle("transicao");
    btnReset.style.backgroundColor = "hsl(185, 42%, 37%)"
    btnReset.style.borderBottom = "3px solid hsl(185, 58%, 25%)"
    btnReset.classList.toggle("transicao");
    btnEq.style.backgroundColor = "hsl(25, 98%, 40%)"
    btnEq.style.borderBottom = "3px solid hsl(25, 99%, 27%)"
    btnEq.classList.toggle("transicao");
    title.style.fontWeight = "700"
    for(let i = 0; i <= 15; i++){
        btn[i].style.color = "black"
        btn[i].classList.toggle('border2')
        btn[i].style.borderBottom = "3px solid rgb(151, 150, 150)";
        
    }

})
    const one = document.querySelector('.button-one');
    
    one.addEventListener('click', () => {
    var body = document.querySelector('body');
    body.classList.toggle("transicao");
    body.style.backgroundColor = ""
    header.style.backgroundColor = ""
    header.style.color = ""
    header.classList.toggle("transicao");
    display.style.backgroundColor = ""
    displayInput.style.backgroundColor = ""
    display.classList.toggle("transicao");
    displayInput.style.color = ""
    displayInput.classList.toggle("transicao");
    toggle.style.backgroundColor = ""
    toggle.classList.toggle("transicao");
    btnDel.style.backgroundColor = ""
    btnDel.style.color = ""
    btnDel.style.borderBottom = ""
    btnDel.classList.toggle("transicao");
    btnReset.style.backgroundColor = ""
    btnReset.style.borderBottom = ""
    btnReset.classList.toggle("transicao");
    btnEq.style.backgroundColor = ""
    btnEq.style.borderBottom = ""
    btnEq.classList.toggle("transicao");
    
    for(let i = 0; i <= 15; i++){
        btn[i].style.color = ""
        btn[i].classList.toggle('border2')
        btn[i].style.borderBottom = "";
        
    }
  
    })

const three = document.querySelector('.button-three');
three.addEventListener('click', () => {
    var body = document.querySelector('body');
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
})

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

