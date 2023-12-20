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
let backgroundToggle = document.querySelector('.labelButtonTheme');
let num = document.querySelector('.btnNumber');
const two = document.querySelector('.button-twe');
two.addEventListener('click', () => {
    
    adicionaHoverTwo();
    var body = document.querySelector('body');
    body.classList.add("transicao");
    body.style.backgroundColor = "var(--backgroundBodyTwe)"
    header.style.backgroundColor = "var(--backgroundBodyTwe)"
    header.style.color = "var(--TextTwo)"
    header.classList.add("transicao");
    display.style.backgroundColor = "var(--backgroundBodyTwe)"
    displayInput.style.backgroundColor = "var(--displayOne)"
    display.classList.add("transicao");
    displayInput.style.color = "var(--TextTwo)"
    displayInput.classList.add("transicao");
    toggle.style.backgroundColor = "var(--toggleTwo)"
    toggle.classList.add("transicao");
    btnDel.style.backgroundColor = "var(--bottonsClearsTwo)"
    btnDel.style.color = "var(--colorWhite)"
    btnDel.style.borderBottom = "3px solid var(--borderClearsOne)"
    btnDel.classList.add("transicao");
    btnReset.style.backgroundColor = "var(--bottonsClearsTwo)"
    btnReset.style.borderBottom = "3px solid var(--borderClearsOne)"
    btnReset.classList.add("transicao");
    btnEq.style.backgroundColor = "var(--backgroundEqTwo)"
    btnEq.style.borderBottom = "3px solid var(--borderEqOne)"
    btnEq.classList.add("transicao");
    title.style.fontWeight = "700"
    backgroundToggle.style.backgroundColor =  "var(--toggleTwo)"
    two.style.backgroundColor = "var(--backgroundToggleTwo)"
    one.style.backgroundColor = "var(--toggleTwo)"
    three.style.backgroundColor = "var(--toggleTwo)"
    for(let i = 0; i <= 15; i++){
        btn[i].style.color = "var(--TextTwo)"
        btn[i].style.backgroundColor = "var(--backgroungNumbersOne)"
        btn[i].classList.add('border2')
        btn[i].style.borderBottom = "3px solid var(--borderNumTwo)";
        
    }
    
})

function adicionaHoverTwo(){
    
    btnEq.addEventListener('mouseenter', function () {
        btnEq.style.backgroundColor = 'var(--hoverEqTwo)';
      });
    btnEq.addEventListener('mouseleave', function () {
        btnEq.style.backgroundColor = 'var(--backgroundEqTwo)';
      });

    btnReset.addEventListener('mouseenter', function () {
        btnReset.style.backgroundColor = 'var(--hoverClearsTwo)';
      });
    btnReset.addEventListener('mouseleave', function () {
        btnReset.style.backgroundColor = 'var(--bottonsClearsTwo)';
      });
    btnDel.addEventListener('mouseenter', function () {
        btnDel.style.backgroundColor = 'var(--hoverClearsTwo)';
      });
    btnDel.addEventListener('mouseleave', function () {
        btnDel.style.backgroundColor = 'var(--bottonsClearsTwo)';
      });
      two.addEventListener('mouseenter', function () {
        two.style.backgroundColor = 'var(--backgroundTogglesTwoHover)';
      });
      two.addEventListener('mouseleave', function () {
        two.style.backgroundColor = 'var(--backgroundToggleTwo)';
      });

      one.addEventListener('mouseenter', function () {
        one.style.backgroundColor = 'var(--backgroundToggleOne)';
      });
      one.addEventListener('mouseleave', function () {
        one.style.backgroundColor = 'var(--toggleTwo)';
      });
      
      three.addEventListener('mouseenter', function () {
        three.style.backgroundColor = 'var(--backgroundToggleThree)';
      });
      three.addEventListener('mouseleave', function () {
        three.style.backgroundColor = 'var(--toggleTwo)';
      });  
    
}
    const one = document.querySelector('.button-one');
    
    one.addEventListener('click', () => {
    
    adicionaHoverOne()
    var body = document.querySelector('body');
    body.classList.add("transicao");
    body.style.backgroundColor = "var(--backgroundBodyOne)"
    header.style.backgroundColor = "var(--backgroundBodyOne)"
    header.style.color = "var(--TextWhiteThree)"
    header.classList.add("transicao");
    display.style.backgroundColor = "var(--backgroundBodyOne)"
    displayInput.style.backgroundColor = "var(--colorDisplay)"
    display.classList.add("transicao");
    displayInput.style.color = "var(--TextWhiteThree)"
    displayInput.classList.add("transicao");
    toggle.style.backgroundColor = "var(--toggleOne)"
    toggle.classList.add("transicao");
    btnDel.style.backgroundColor = "var(--backgroundDelOne)"
    btnDel.style.color = "var(--TextWhiteThree)"
    btnDel.style.borderBottom = "3px solid var(--borderClearsOne)"
    btnDel.classList.add("transicao");
    btnReset.style.backgroundColor = "var(--backgroundDelOne)"
    btnReset.style.borderBottom = "3px solid var(--borderClearsOne)"
    btnReset.classList.add("transicao");
    btnEq.style.backgroundColor = "var(--backgroundEqOne)"
    btnEq.style.color = "var(--colorWhite)"
    btnEq.style.borderBottom = "3px solid var(--borderEqOne)"
    btnEq.classList.add("transicao");
    backgroundToggle.style.backgroundColor = "var(--colorDisplay)"
    one.style.backgroundColor = "var(--backgroundToggleOne)"
    two.style.backgroundColor = "var(--colorDisplay)"
    three.style.backgroundColor = "var(--colorDisplay)"
    
    for(let i = 0; i <= 15; i++){
        btn[i].style.backgroundColor = "var(--TextWhiteThree)"
        btn[i].style.color = "var(--textButton)"

        btn[i].classList.add('border2')
        btn[i].style.borderBottom = "3px solid var(--borderNumberOne)";
        
    };
  
    })
    function adicionaHoverOne(){
    
        btnEq.addEventListener('mouseenter', function () {
            btnEq.style.backgroundColor = 'var(--hoverEqOne)';
          });
        btnEq.addEventListener('mouseleave', function () {
            btnEq.style.backgroundColor = 'var(--backgroundEqOne)';
          });
    
        btnReset.addEventListener('mouseenter', function () {
            btnReset.style.backgroundColor = 'var(--hoverClearsOne)';
          });
        btnReset.addEventListener('mouseleave', function () {
            btnReset.style.backgroundColor = 'var(--backgroundDelOne)';
          });
        btnDel.addEventListener('mouseenter', function () {
            btnDel.style.backgroundColor = 'var(--hoverClearsOne)';
          });
        btnDel.addEventListener('mouseleave', function () {
            btnDel.style.backgroundColor = 'var(--backgroundDelOne)';
          });
          one.addEventListener('mouseenter', function () {
            one.style.backgroundColor = 'var(--backgroundToggleOneHover)';
          });
          one.addEventListener('mouseleave', function () {
            one.style.backgroundColor = 'var(--backgroundToggleOne)';
          });
          
          three.addEventListener('mouseenter', function () {
            three.style.backgroundColor = 'var(--backgroundToggleThreeHover)';
          });
          three.addEventListener('mouseleave', function () {
            three.style.backgroundColor = 'var(--colorDisplay)';
          });
          
          two.addEventListener('mouseenter', function () {
            two.style.backgroundColor = 'var(--backgroundToggleTwo)';
          });
          two.addEventListener('mouseleave', function () {
            two.style.backgroundColor = 'var(--colorDisplay)';
          });
          
        
    }

const three = document.querySelector('.button-three');
three.addEventListener('click', () => {
    
    adicionaHoverThree()
    var body = document.querySelector('body');
    body.classList.add("transicao");
    body.style.backgroundColor = "var(--backgroundBodyThree)"
    header.style.backgroundColor = "var(--backgroundBodyThree)"
    header.style.color = "var(--textYellowThree)"
    header.classList.add("transicao");
    display.style.backgroundColor = "var(--backgroundBodyThree)"
    displayInput.style.backgroundColor = "var(--toggleThree)"
    display.classList.add("transicao");
    displayInput.style.color = "var(--textYellowThree)"
    displayInput.classList.add("transicao");
    toggle.style.backgroundColor = "var(--toggleThree)"
    toggle.classList.add("transicao");
    btnDel.style.backgroundColor = "var(--buttonsClearsThree)"
    btnDel.style.color = "var(--colorWhite)"
    btnDel.style.borderBottom = "3px solid var(--borderClearsThree)"
    btnDel.classList.add("transicao");
    btnReset.style.backgroundColor = "var(--buttonsClearsThree)"
    btnReset.style.borderBottom = "3px solid var(--borderClearsThree)"
    btnReset.classList.add("transicao");
    btnEq.style.backgroundColor = "var(--buttonEqThree)"
    btnEq.style.color = "var(--btnEqColor)"
    btnEq.style.borderBottom = "3px solid var(--borderEqThree)"
    btnEq.classList.add("transicao");
    
    backgroundToggle.style.backgroundColor = "var(--toggleThree)";
    one.style.backgroundColor = "var(--toggleThree)"
    two.style.backgroundColor = "var(--toggleThree)"
    three.style.backgroundColor = "var(--backgroundToggleThree)"
    for(let i = 0; i <= 15; i++){
        btn[i].style.color = "var(--textYellowThree)"
        btn[i].style.backgroundColor = "var(--colorButtonThree)"
        btn[i].classList.add('border2')
        btn[i].style.borderBottom = "3px solid var(--borderNumbersThree)";
        
    }
})

function adicionaHoverThree(){
    
    btnEq.addEventListener('mouseenter', function () {
        btnEq.style.backgroundColor = 'var(--hoverEqThree)';
      });
    btnEq.addEventListener('mouseleave', function () {
        btnEq.style.backgroundColor = 'var(--buttonEqThree)';
      });

    btnReset.addEventListener('mouseenter', function () {
        btnReset.style.backgroundColor = 'var(--hoverClearsThree)';
      });
    btnReset.addEventListener('mouseleave', function () {
        btnReset.style.backgroundColor = 'var(--buttonsClearsThree)';
      });
    btnDel.addEventListener('mouseenter', function () {
        btnDel.style.backgroundColor = 'var(--hoverClearsThree)';
      });
    btnDel.addEventListener('mouseleave', function () {
        btnDel.style.backgroundColor = 'var(--buttonsClearsThree)';
      });
      three.addEventListener('mouseenter', function () {
        three.style.backgroundColor = 'var(--backgroundToggleThreeHover)';
      });
      three.addEventListener('mouseleave', function () {
        three.style.backgroundColor = 'var(--backgroundToggleThree)';
      });
      one.addEventListener('mouseenter', function () {
        one.style.backgroundColor = 'var(--backgroundToggleOne)';
      });
      one.addEventListener('mouseleave', function () {
        one.style.backgroundColor = 'var(--toggleThree)';
      });
      two.addEventListener('mouseenter', function () {
        two.style.backgroundColor = 'var(--backgroundToggleTwo)';
      });
      two.addEventListener('mouseleave', function () {
        two.style.backgroundColor = 'var(--toggleThree)';
      });
    
    
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

