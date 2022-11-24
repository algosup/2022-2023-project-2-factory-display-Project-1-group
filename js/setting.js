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

// Button
const button = document.createElement('button');
button.textContent = 'Validate';
button.id = 'btn';
button.onclick = 'updatevalue';
setting.append(button);
const btn = document.querySelector('#btn');

// Output
const outputText = document.createElement('p')
outputText.textContent = '';
outputText.className = 'output';
/*
// Triger via onclick input     
btn.addEventListener('click',() =>{
    let trig = true;
    if(trig = true){
        updatevalue();
        trig = false;
    }
    
});        

// Show input value on the page
function updatevalue(){
    outputText.textContent = `${inputText.value}`; 
    setting.append(outputText);
} 
*/
// Index display

//const indexDisplay = document.querySelector('#index-display');
//indexDisplay.innerHTML = '';


btn.addEventListener('click',() =>{
    let trig = true;
    if(trig = true){
        updatevalue();
      
        trig = false;
    }
    
});        

// Show input value on the page
function updatevalue(){
   
    outputText.textContent = `${inputText.value}`; 
   //indexDisplay.append(outputText);
    setting.append(outputText);
} 

















