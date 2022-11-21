const setting = document.querySelector('#setting');

setting.innerHTML ='';
const text =document.createElement('h2');
 text.textContent = 'Select your title';
setting.append(text);

const inputText = document.createElement('input');
inputText.type = 'text';
inputText.className = 'input'
setting.append(inputText);

const button = document.createElement('button');
button.textContent = 'Validate';
button.id = 'btn';
setting.append(button);
const input = document.querySelector('.input');
const btn = document.querySelector('#btn');
//console.log(`setting ${setting}`);
//console.log(`btn ${btn}`);
//console.log(`input ${input}`);







