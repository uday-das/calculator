let string = "";
let decimalEntered = false;

let button = document.querySelectorAll('.button')
Array.from(button).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } 
    else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
      decimalEntered = false; 
    } 
    else if (e.target.innerHTML === '%') {
      string = eval(string) / 100; 
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === '+/-') {
      if (string !== "" && !isNaN(string)) {
        string = eval(-1 * parseFloat(string));
        document.querySelector('input').value = string;
      }
    }
    else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
