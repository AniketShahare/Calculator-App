let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName("button"));


// map() for each button from buttons 
buttons.map( button => {
    button.addEventListener('click', (e) => {

        // SWitch for function Keys
        switch (e.target.innerText) {

            case 'C':
                display.innerText = '';
                break;

            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;   

             case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
                
            default:
               display.innerText += e.target.innerText;

        }
    })
})