import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employees-tasks',
  templateUrl: './employees-tasks.page.html',
  styleUrls: ['./employees-tasks.page.scss'],
})
export class EmployeesTasksPage implements OnInit {
  user = this.authService.getCurrentUser();
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

// appointmentList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         appointmentList.removeChild(li);
//     }
// });
  }
  addAppointment(){
    var appointmentDate = document.getElementById('beginDate');
    var appointmentTime = document.getElementById('endDate');
    var appointmentVisitor = document.getElementById('newTask'); // taskInput
    var addAppointmentButton = document.getElementById('addTaskButton'); // addTaskButton
    var appointmentList = document.getElementById('appointmentList'); // incompleteTask    
    var date = (<HTMLInputElement>appointmentDate).value;
    var date2 = (<HTMLInputElement>appointmentTime).value;
    var text = (<HTMLInputElement>appointmentVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='nametask' >" + 'Nom de la tâche : ' + text +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<label id='timestart' >" + 'Début : ' + date + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<label id='timeend' >" + 'Fin : ' + date2 + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<button id='edit' >Editer</button>" +
        "<button id='delete' >Supprimer</button>";
    appointmentList.appendChild(li);
    (<HTMLInputElement>appointmentDate).value = '';
    (<HTMLInputElement>appointmentTime).value = '';
    (<HTMLInputElement>appointmentVisitor).value = '';
}
  switchPage(page: string){
    this.authService.getCurrentUser().subscribe((user) => { // this function check if the user is already identified and redirect him to the content of the website
      if (user) {
        console.log('GOT USER ON LOGIN');
        this.router.navigateByUrl(page, { replaceUrl: true });
      }
    });
  }
  signOut() {
    this.authService.signOut();
  }
  sendDatabase(){

  }
  

}
