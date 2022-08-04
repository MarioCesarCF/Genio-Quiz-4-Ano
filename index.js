const largada = document.getElementById('largada');
const tartaruga = document.getElementById('tartaruga');
const caracol = document.getElementById('caracol');
const estrela = document.getElementById('estrela');

let marginLeftTart = 0;
let timerTart = '';
let marginLeftCarc = 0;
let timerCarc = '';
let marginLeftEstr = 0;
let timerEstr = '';

largada.addEventListener('click', (e) => {
    e.preventDefault();
    largada.disabled = true;

    tartaruga.style.marginLeft = '0';
    marginLeftTart = 0;
    caracol.style.marginLeft = '0';
    marginLeftCarc = 0;
    estrela.style.marginLeft = '0';
    marginLeftEstr = 0;

    tartarugaAnda1();
    caracolAnda1();
    estrelaAnda1();
})


function tartarugaAnda1() {
    timerTart = setInterval(() => {
        marginLeftTart += 10;
        tartaruga.style.marginLeft = `${marginLeftTart}px`;
        
        if (marginLeftTart > 120) {
            setTimeout(() => {
                clearInterval(timerTart);
                timerTart = setInterval(() => {
                    marginLeftTart += 10;
                    tartaruga.style.marginLeft = `${marginLeftTart}px`;
                    
                    if (marginLeftTart > 260) {
                        setTimeout(() => {
                            clearInterval(timerTart);
                            clearInterval(timerCarc);
                            clearInterval(timerEstr);
                            alert('Tartaruga Venceu!!');
                        });
                    }
                }, 1000);
            });
        }
    }, 2000);
}

function caracolAnda1() {
    timerCarc = setInterval(() => {
        marginLeftCarc += 10;
        caracol.style.marginLeft = `${marginLeftCarc}px`;
        
        if (marginLeftCarc > 100) {
            setTimeout(() => {
                clearInterval(timerCarc);
                timerCarc = setInterval(() => {
                    marginLeftCarc += 10;
                    caracol.style.marginLeft = `${marginLeftCarc}px`;
                                        
                }, 3000);
            });
        }
    }, 500);
}

function estrelaAnda1() {
    timerEstr = setInterval(() => {
        marginLeftEstr += 10;
        estrela.style.marginLeft = `${marginLeftEstr}px`;
        
        if (marginLeftEstr > 100) {
            setTimeout(() => {
                clearInterval(timerEstr);
                timerEstr = setInterval(() => {
                    marginLeftEstr += 10;
                    estrela.style.marginLeft = `${marginLeftEstr}px`;
                                        
                }, 2100);
            });
        }
    }, 1000);
}

