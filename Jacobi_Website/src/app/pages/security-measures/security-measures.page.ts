import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-measures',
  templateUrl: './security-measures.page.html',
  styleUrls: ['./security-measures.page.scss'],
})
export class SecurityMeasuresPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var newVisitor = document.getElementById('newVisitor'); // taskInput
var addVisitorButton = document.getElementById('addVisitorButton'); // addTaskButton
var visitorList = document.getElementById('visitorList'); // incompleteTask


var addVisitor = function () {
    var text = (<HTMLInputElement>newVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='nameVisitor'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    visitorList.appendChild(li);
    (<HTMLInputElement>newVisitor).value = '';
}

addVisitorButton.onclick = addVisitor;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addVisitor();
    }
});

// visitorList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         visitorList.removeChild(li);
//     }
// });
  }

}
