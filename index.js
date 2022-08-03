const largada = document.getElementById('largada');
const tartaruga = document.getElementById('tartaruga');
const caracol = document.getElementById('caracol');
const estrela = document.getElementById('estrela');
let counterTart = 0;
let counterCarc = 0;
let counterEstr = 0;
let marginLeftTart = 0;

largada.addEventListener('click', (e) => {
    e.preventDefault();
    tartaruga.style.marginLeft = '0';
    marginLeftTart = 0;
    if(counterTart < 20) {
        let timerTart = setInterval(() => {
            marginLeftTart += 10;
            console.log(counterTart);
            tartaruga.style.marginLeft = `${marginLeftTart}px`;
            counterTart += 1;
            if(marginLeftTart > 250) {
                setTimeout(() => { 
                    clearInterval(timerTart); 
                    alert('Tartaruga Venceu!!'); 
                }, 1000);
            }
        }, 1000);
    } else {
        let timerTart = setInterval(() => {
            marginLeftTart += 10;
            console.log(marginLeftTart)
            tartaruga.style.marginLeft = `${marginLeftTart}px`;
            counterTart += 1;
            if(marginLeftTart > 250) {
                setTimeout(() => { 
                    clearInterval(timerTart); 
                    alert('Tartaruga Venceu!!'); 
                }, 1000);
            }
        }, 1000);
    }
    
})
// function largada() {
//     if(counterTart > 10) {
//         setInterval(tartarugaAnda1(), 1000);
//     } else {
//         //tartarugaAnda2();
//     }
    
//     //caracolAnda();
//     //estrelaAnda();
// }

//setInterval(tartarugaAnda1(), 1000);

// function tartarugaAnda1() {        
//         setInterval(() => {        
//         marginLeftTart += 10;
//         console.log(marginLeftTart)
//         tartaruga.style.marginLeft = `${marginLeftTart}px`;
//         counterTart += 1;
//         if(marginLeftTart > 250) {
//             setTimeout(() => { clearInterval(timerTart); alert('Tartaruga Venceu!!'); }, 1000);
//         }
//     }, 1000);
// }

