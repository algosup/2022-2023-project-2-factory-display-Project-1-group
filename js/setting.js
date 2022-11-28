// Setting content in setting page
const setting = document.querySelector('#setting');
setting.innerHTML ='';

// Option note
const note = [ 'Add carousel','Select your title', 'Theme color']

// Display note
const text =document.createElement('h2');
text.textContent = note[1];
setting.append(text);

// Input
const inputText = document.createElement('input');
inputText.type = 'text';
inputText.className = 'input';
inputText.value = '';
setting.append(inputText);
const input = document.querySelector('.input');

// AddButton
const button = document.createElement('button');
button.textContent = 'Validate';
button.id = 'btn';
button.className = 'btn btn-success';
button.onclick = 'updatevalue';
setting.append(button);
const btn = document.querySelector('#btn');

// ClearButton
const clear_button = document.createElement('button');
clear_button.textContent = 'Clear';
clear_button.id = 'clear-btn';
clear_button.className = 'btn btn-danger';
clear_button.onclick = 'updatevalue';
setting.append(clear_button);
const clear_btn = document.querySelector('#clear-btn');

// Output
const outputText = document.createElement('p')
outputText.textContent = '';
outputText.className = 'output';



btn.addEventListener('click',() =>{
    let trig = true;
    if(trig = true){
        updatevalue();
      
        trig = false;
    }
    
});

clear_btn.addEventListener('click',() =>{
    outputText.textContent = ''; 
    setting.append(outputText);
     
    
});

// Show input value on the page
function updatevalue(){
   
    outputText.textContent = `${inputText.value}`; 
   //indexDisplay.append(outputText);
    setting.append(outputText);
} 

















