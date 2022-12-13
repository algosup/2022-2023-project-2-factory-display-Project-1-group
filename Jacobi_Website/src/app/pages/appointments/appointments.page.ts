import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var appointmentDate = document.getElementById('visitorDate');
var appointmentTime = document.getElementById('visitorTime');
var appointmentVisitor = document.getElementById('newVisitor'); // taskInput
var addAppointmentButton = document.getElementById('addAppointmentButton'); // addTaskButton
var appointmentList = document.getElementById('appointmentList'); // incompleteTask


var addAppointment = function () {
    var date = (<HTMLInputElement>appointmentDate).value;
    var time = (<HTMLInputElement>appointmentTime).value;
    var text = (<HTMLInputElement>appointmentVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateapp'>" + date + "</label>" +
        "<label id='timeapp'>" + time + "</label>" +
        "<label id='nameapp'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    appointmentList.appendChild(li);
    (<HTMLInputElement>appointmentDate).value = '';
    (<HTMLInputElement>appointmentTime).value = '';
    (<HTMLInputElement>appointmentVisitor).value = '';
}

addAppointmentButton.onclick = addAppointment;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addAppointment();
    }
});

// appointmentList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         appointmentList.removeChild(li);
//     }
// });
  }

}
