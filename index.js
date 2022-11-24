let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                 display.innerText = eval(display.innerText);
                break;
            case 'DEL':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                 }
                break;
            case '&#247;':
                 if (display.innerText){
	                  computation=display.innerText/e.target.innerText;
	                 }
	                break ;
            case '&times;':
           



             
            default:
                display.innerText += e.target.innerText;
        }
    });
});
if(display.innerText=='&#247;'){
    display.innerText /= e.target.innerText;
}