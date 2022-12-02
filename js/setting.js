
// Setting content in setting page
const setting = document.querySelector('#setting');
setting.innerHTML ='';

// Option note
const note = [ 'Add carrousel','Select your title', 'Theme color']

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

// List
let list = document.createElement('li')
list.textContent = '';
list.className = 'output';
setting.append(list);


// const carrousel = document.createElement('div');
// carrousel.id = 'carrousel';
// carrousel.className = 'carrousel slide';
// carrousel.dataset = 'carousel'
// setting.append(carrousel);
//  const carr = document.querySelector('#carrousel');

// Creat Carrousel
const carrousel_button = document.createElement('button');
carrousel_button.id = 'carrousel-btn';
carrousel_button.textContent = 'Add new carrousel';
carrousel_button.className ='btn btn-success';
setting.append(carrousel_button);
const carrousel_btn = document.querySelector('#carrousel-btn');

//  Carrousel
// const carousel = document.querySelector('div');
// carrousel.id = 'carousel';
// carrousel.className = 'carousel slide';



// setting.append(carrousel);



// setting.append(carrousel);






// Add writting content
btn.addEventListener('click',() =>{
    let trig = true;
    if(trig = true){
        updatevalue();
      
        trig = false;
    }
    
});

// clear writting content
clear_btn.addEventListener('click',() =>{
    outputText.textContent = ''; 
    setting.append(outputText);
     
    
});

// Show input value on the page
function updatevalue(){
   for(let i = 0; i<10;i++){
    console.log(`i = ${i}`);
    outputText.textContent += `${inputText.value}`; 
    list.append(outputText);
   }
    
    
} 

carrousel_btn.addEventListener('click', () =>{
   
    carrousel.append('hello folk');
    
  
   
        
    
    
});


















