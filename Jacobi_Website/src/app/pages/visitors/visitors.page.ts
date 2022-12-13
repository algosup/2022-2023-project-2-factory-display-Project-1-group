import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.page.html',
  styleUrls: ['./visitors.page.scss'],
})
export class VisitorsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var visitorDate = document.getElementById('visitorDate');
var newVisitor = document.getElementById('newVisitor'); // taskInput
var addVisitorButton = document.getElementById('addVisitorButton'); // addTaskButton
var visitorList = document.getElementById('visitorList'); // incompleteTask


var addVisitor = function () {
    var date = (<HTMLInputElement>visitorDate).value;
    var text = (<HTMLInputElement>newVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateVisitor'>" + date + "</label>" +
        "<label id='nameVisitor'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    visitorList.appendChild(li);
    (<HTMLInputElement>visitorDate).value    = '';
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
